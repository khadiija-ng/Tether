package com.disi.gateway.filter;

import com.disi.gateway.util.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.filter.GatewayFilter;
import org.springframework.cloud.gateway.filter.factory.AbstractGatewayFilterFactory;
import org.springframework.http.HttpHeaders;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

// Le filtre vérifie si la requête contient un token JWT dans l'en-tête d'autorisation, et si ce dernier est valide avant de permettre à la requête de continuer vers le service en aval.
@Component
public class AuthenticationFilter extends AbstractGatewayFilterFactory<AuthenticationFilter.Config> {

    @Autowired
    private RouteValidator validator;
    // @Autowired
    // private RestTemplate restTemplate;
    @Autowired
    private JwtUtil jwtUtil;

    public AuthenticationFilter() {
        super(Config.class);
    }

    // Appelée à chaque requête qui transite par l'API Gateway.
    @Override
    public GatewayFilter apply(Config config) {
        return (exchange, chain) -> {
            if (validator.isSecured.test(exchange.getRequest())) {
                // Vérifie si l'en-tête contient le token d'autorisation.
                if (!exchange.getRequest().getHeaders().containsKey(HttpHeaders.AUTHORIZATION)) {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Acces non autorises");
                }

                // Récupère le header d'autorisation.
                String authHeader = exchange.getRequest().getHeaders().getFirst(HttpHeaders.AUTHORIZATION);

                if (authHeader == null || !authHeader.startsWith("Bearer ")) {
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "autorisation invalide");
                }

                // Extrait le token JWT.
                String token = authHeader.substring(7);

                try {
                    // restTemplate.getForObject("http://identityService//users/validate?token" + token, String.class);

                    // Valide le token à l'aide de JwtUtil.
                    jwtUtil.validateToken(token);
                } catch (Exception e) {
                    System.out.println("invalide access***************************************");
                    throw new ResponseStatusException(HttpStatus.UNAUTHORIZED, "Unauthorized access", e);
                }
            }

            // Si tout est valide, continue le filtrage.
            return chain.filter(exchange);
        };
    }

    // Classe de configuration pour le filtre.
    public static class Config {
        // Configuration si nécessaire (peut rester vide).
    }
}
