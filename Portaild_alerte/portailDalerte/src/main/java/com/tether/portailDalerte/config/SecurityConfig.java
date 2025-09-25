package com.tether.portailDalerte.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;


import com.tether.portailDalerte.filter.JwtFilter;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

  @Bean
  public JwtFilter jwtFilter() {
    return new JwtFilter();
  }

  @Bean
  public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
    return http
        .csrf(AbstractHttpConfigurer::disable)
        .authorizeHttpRequests(auth -> auth.requestMatchers("/portail/alerte/add",
            "/eureka",
            "/error")
            .permitAll()
            .anyRequest()
            .authenticated()).sessionManagement(s -> s.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
        .addFilterBefore(jwtFilter(), UsernamePasswordAuthenticationFilter.class)
        .build();
  }
}