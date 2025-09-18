package com.disi.gateway.filter;

import org.springframework.http.server.reactive.ServerHttpRequest;
import org.springframework.stereotype.Component;

import java.util.*;
import java.util.function.Predicate;

// sert à déterminer quelles routes nécessitent une authentification dans une API Gateway basée sur Spring Cloud Gateway.
@Component
public class RouteValidator {
//openApiEndpoints : Il s'agit d'une liste de chemins d'API (endpoints) qui sont considérés comme non sécurisés et qui ne nécessitent pas d'authentification
    public static final List<String> openApiEndpoints = List.of(
            "/users/register",
            "/users/token",
            "/eureka"
            // "/users/all"
        //     "/ref/**"
    );
   
//La fonction parcourt la liste openApiEndpoints et vérifie si l'URI de la requête contient l'un des chemins définis dans cette liste.
//Si la route ne correspond à aucun des chemins ouverts, le Predicate retourne true, ce qui signifie que la route est sécurisée et nécessite une authentification.   
    public Predicate<ServerHttpRequest> isSecured =
            request -> openApiEndpoints
                    .stream()
                    .noneMatch(uri -> request.getURI().getPath().contains(uri));

}

