package com.tether.portailDalerte.filter;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.web.filter.OncePerRequestFilter;
import org.springframework.web.server.ResponseStatusException;

import com.tether.portailDalerte.model.UserPrincipal;
import com.tether.portailDalerte.util.JwtUtil;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

public class JwtFilter extends OncePerRequestFilter {

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request,
            HttpServletResponse response,
            FilterChain filterChain) throws ServletException, IOException {
        String authHeader = request.getHeader("Authorization");

        if (authHeader != null && authHeader.startsWith("Bearer ")) {
            String token = authHeader.substring(7); 

            if (jwtUtil.validateToken(token)) {
                // Extraire les infos utilisateur
                UserPrincipal user = new UserPrincipal();
                String username = jwtUtil.getUsernameFromToken(token);
                List<GrantedAuthority> authorties = new ArrayList();
                
                List<Map<String, Object>> roles = jwtUtil.extractRoles(token);
                for (Map<String, Object> role : roles) {
                    System.out.println(role.get("roleName"));
                    authorties.add(new SimpleGrantedAuthority(role.get("roleName").toString()));
                }
                user.setAuthorities(authorties);
                user.setUsername(username);
                SecurityContext context = SecurityContextHolder.createEmptyContext();
                UsernamePasswordAuthenticationToken authToken = new UsernamePasswordAuthenticationToken(user,null, user.getAuthorities());
                authToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                SecurityContextHolder.getContext().setAuthentication(authToken);
                context.setAuthentication(authToken);
                SecurityContextHolder.setContext(context);
                System.out.println("Token valide****************************************************");
                System.out.println("before the security context is initialized");
                System.out.println(SecurityContextHolder.getContext().getAuthentication());
            }
        }
        
        filterChain.doFilter(request, response); // Continuer la chaîne de filtres
    }
}