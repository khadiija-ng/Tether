package com.disi.gateway.util;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;

//La classe JwtUtil est une classe utilitaire pour la gestion des tokens JWT. Elle est responsable de la validation des tokens JWT, principalement en vérifiant leur signature à l'aide d'une clé secrète.
@Component
public class JwtUtil {
//Il s'agit de la clé secrète utilisée pour signer et vérifier les JWT. Cette clé est encodée en base64.
//Elle est utilisée dans le processus de validation pour s'assurer que les tokens n'ont pas été altérés.

    public static final String SECRET = "MXAFhXFc0uqfqSg3kzestvb8sfaKSiEcEkCpruTOgloYmFhYTI0YjI2NWRjMWVmZTA1MzJlNTZhODI4OWY5Zjc1OTIyYTA2MmU5YzEzNjI1ZTNmM2I1MzY1ODQwMjYyNTYzNmIxODkxOWMzODA0OTFlZDlmODVmMzEwOGM3ZWZhZTc1OGExZjI3YzU0Nzk1NzAyOGQ0OTlkMjgzOTVmYjM=";

//Cette méthode prend un token JWT en paramètre et tente de le valider.
//Elle utilise la méthode de la bibliothèque JJWT (Java JWT) pour parsing et valider le token
    public void validateToken(final String token) {
        Jwts.parserBuilder().setSigningKey(getSignKey()).build().parseClaimsJws(token);
    }


//La clé de signature obtenue via getSignKey() est utilisée pour vérifier la signature du JWT.
    private Key getSignKey() {
        byte[] keyBytes = Decoders.BASE64.decode(SECRET);
        return Keys.hmacShaKeyFor(keyBytes);
    }
}
