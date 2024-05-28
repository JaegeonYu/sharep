package com.sharep.be.infra.config;

import com.sharep.be.modules.auth.CustomAccountInfo;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import io.jsonwebtoken.security.SecurityException;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.internal.util.ToStringBuilder;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.sql.Date;
import java.time.ZonedDateTime;
import java.util.List;

@Component
@Slf4j
@Getter
public class JwtUtil {

    private final Key key;
    private final Long accessTokenExpTime;
    private final String header;


    public JwtUtil(@Value("${jwt.secret}") String key,
            @Value("${jwt.expiration_time}") Long accessTokenExpTime,
            @Value("${jwt.header}") String header) {
        byte[] keyBytes = Decoders.BASE64.decode(key);
        this.key = Keys.hmacShaKeyFor(keyBytes);
        this.accessTokenExpTime = accessTokenExpTime;
        this.header = header;
    }

    public String createAccessToken(CustomAccountInfo account) {
        return createToken(account, accessTokenExpTime);
    }


    private String createToken(CustomAccountInfo account, Long expireTime) {
        Claims claims = Jwts.claims();
        claims.put("id", account.getId());
        claims.put("email", account.getEmail());
        claims.put("roles", account.getRoles());

        ZonedDateTime now = ZonedDateTime.now();
        ZonedDateTime tokenValidity = now.plusSeconds(expireTime);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(Date.from(now.toInstant()))
                .setExpiration(Date.from(tokenValidity.toInstant()))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public Long getAccountId(String token) {
        return parseClaims(token).get("id", Long.class);
    }

    public String getEmail(String token) {
        return parseClaims(token).get("email", String.class);
    }


    private Claims parseClaims(String token) {
        try {
            return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT Claims string is empty");
        }

        return false;
    }

    public List<String> getRoles(String token) {

        return parseClaims(token).get("roles", List.class);
    }
}
