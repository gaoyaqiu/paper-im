package com.gyq.im.server.security.jwt;

import com.gyq.im.common.tools.json.JsonConverter;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContext;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static com.gyq.im.server.security.jwt.JwtToken.of;
import static org.springframework.security.core.context.SecurityContextHolder.createEmptyContext;


/**
 * @author gaoyaqiu
 */
public class JwtAuthenticationFilter extends AbstractAuthenticationProcessingFilter {

    private static final String AUTHORIZATION = "Authorization";
    private static final String TOKEN_HEADER = "Bearer ";


    public JwtAuthenticationFilter(AuthenticationManager authenticationManager) {
        super("/**");
        setAuthenticationManager(authenticationManager);
        setAuthenticationFailureHandler(new JwtAuthenticationFailureHandler(JsonConverter.getObjectMapper()));
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response)
            throws AuthenticationException, IOException, ServletException {
        String tokenString = extractToken(request);


        return getAuthenticationManager().authenticate(new JwtAuthenticationToken(null, of(tokenString), null));
    }

    private String extractToken(HttpServletRequest request) {
        String authorizationString = request.getHeader(AUTHORIZATION);

        if (authorizationString == null || !authorizationString.startsWith(TOKEN_HEADER)) {
            throw new BadCredentialsException("Authorization header missing or with invalid format.");
        }

        return authorizationString.substring(TOKEN_HEADER.length(), authorizationString.length());
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authentication) throws IOException, ServletException {
        SecurityContext context = createEmptyContext();
        context.setAuthentication(authentication);
        SecurityContextHolder.setContext(context);
        chain.doFilter(request, response);
    }

    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException exception) throws IOException, ServletException {
        getFailureHandler().onAuthenticationFailure(request, response, exception);
    }

}
