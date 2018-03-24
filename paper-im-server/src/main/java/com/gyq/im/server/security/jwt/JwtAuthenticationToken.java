package com.gyq.im.server.security.jwt;

import org.springframework.security.authentication.AbstractAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;

import java.util.Collection;

/**
 * @author gaoyaqiu
 */
public class JwtAuthenticationToken extends AbstractAuthenticationToken {
    private Object principal;
    private JwtToken jwtToken;

    public JwtAuthenticationToken(Object principal, JwtToken jwtToken, Collection<? extends GrantedAuthority> authorities) {
        super(authorities);
        this.principal = principal;
        this.jwtToken = jwtToken;
    }

    @Override
    public Object getCredentials() {
        return jwtToken;
    }

    @Override
    public Object getPrincipal() {
        return principal;
    }

    public JwtToken getJwtToken() {
        return jwtToken;
    }


}
