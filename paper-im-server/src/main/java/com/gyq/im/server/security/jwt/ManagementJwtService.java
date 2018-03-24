package com.gyq.im.server.security.jwt;

import com.gyq.im.server.config.PropertiesConfig;
import com.gyq.im.server.security.management.ManagementRole;
import com.gyq.im.server.security.management.ManagementUser;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.Date;
import java.util.List;
import java.util.function.Function;

import static com.gyq.im.server.security.management.ManagementUser.of;
import static io.jsonwebtoken.SignatureAlgorithm.HS512;
import static java.util.stream.Collectors.toList;


/**
 * @author gaoyaqiu
 */
@Component
public class ManagementJwtService {
    private static final String ISSUER = "gyq";

    private static final String SCOPES = "scopes";

    private PropertiesConfig config;

    @Autowired
    public ManagementJwtService(PropertiesConfig propertiesConfig) {
        this.config = propertiesConfig;
    }


    public JwtToken generateJwtToken(ManagementUser user) {
        Claims claims = Jwts.claims().setSubject(user.getUserName());
        claims.put(SCOPES, user.getRoles());

        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + config.getTokenExpire() * 60L * 1000L);

        String tokenString = Jwts.builder()
                .setClaims(claims)
                .setIssuer(ISSUER)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(HS512, config.getSignatureKey())
                .compact();

        return JwtToken.of(tokenString);
    }

    public JwtAuthenticationToken from(JwtToken jwtToken) {
        Claims claims = Jwts.parser().setSigningKey(config.getSignatureKey()).parseClaimsJws(jwtToken.getToken()).getBody();
        String user = claims.getSubject();
        List<String> roles = claims.get(SCOPES, List.class);
        List<ManagementRole> managementRoles = roles.stream().map(ManagementRole::valueOf).collect(toList());
        List<GrantedAuthority> grantedAuthorities = roles.stream().map((Function<String, GrantedAuthority>) role -> new SimpleGrantedAuthority("ROLE_" + role)).collect(toList());
        JwtAuthenticationToken token = new JwtAuthenticationToken(of(user, managementRoles), null, grantedAuthorities);
        token.setAuthenticated(true);
        return token;
    }

}
