package com.gyq.im.server.security.management;

import com.gyq.im.server.security.jwt.JwtAuthenticationToken;
import com.gyq.im.server.security.jwt.ManagementJwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

/**
 * @author gaoyaqiu
 */
@Component
public class ManagementJwtAuthenticationProvider implements AuthenticationProvider {

    private ManagementJwtService jwtService;

    @Autowired
    public ManagementJwtAuthenticationProvider(ManagementJwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        JwtAuthenticationToken authenticationToken = (JwtAuthenticationToken) authentication;
        try {
            return jwtService.from(authenticationToken.getJwtToken());
        } catch (Exception e) {
            throw new BadCredentialsException("非法Token.");
        }
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return JwtAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
