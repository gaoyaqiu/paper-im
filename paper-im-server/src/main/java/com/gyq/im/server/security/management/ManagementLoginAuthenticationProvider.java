package com.gyq.im.server.security.management;

import com.gyq.im.server.config.PropertiesConfig;
import com.gyq.im.server.security.jwt.JwtAuthenticationToken;
import com.gyq.im.server.security.jwt.JwtToken;
import com.gyq.im.server.security.jwt.ManagementJwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import static com.gyq.im.server.security.management.ManagementRole.ADMIN;
import static com.gyq.im.server.security.management.ManagementUser.of;


/**
 * 验证用户有效性.
 *
 * @author gaoyaqiu
 */
@Component
public class ManagementLoginAuthenticationProvider implements AuthenticationProvider {
    private static final String AUTHENTICATION_FAILED_MESSAGE = "Authentication Failed. Invalid user name or password.";

    // 用于发系统消息
    public static final String ADMIN_USER = "admin";

    private ManagementJwtService jwtService;

    private PasswordEncoder passwordEncoder;

    private PropertiesConfig config;

    @Autowired
    public ManagementLoginAuthenticationProvider(ManagementJwtService jwtService,
                                                 PasswordEncoder passwordEncoder,
                                                 PropertiesConfig config) {
        this.jwtService = jwtService;
        this.passwordEncoder = passwordEncoder;
        this.config = config;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();
/*
        if (!(ADMIN_USER.equals(userName) && passwordEncoder.matches(password, b2BProperties.getAdminPassword()))) {
            throw new BadCredentialsException(AUTHENTICATION_FAILED_MESSAGE);
        }*/

        JwtToken jwtToken = jwtService.generateJwtToken(of(ADMIN_USER, ADMIN));
        return new JwtAuthenticationToken(null, jwtToken, null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
