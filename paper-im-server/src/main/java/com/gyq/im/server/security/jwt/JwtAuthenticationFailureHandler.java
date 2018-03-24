package com.gyq.im.server.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gyq.im.common.exception.CommonResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpStatus.UNAUTHORIZED;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

/**
 * @author gaoyaqiu
 */
@Slf4j
@Component
public class JwtAuthenticationFailureHandler implements AuthenticationFailureHandler {

    private ObjectMapper objectMapper;

    public JwtAuthenticationFailureHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    @Override
    public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
        SecurityContextHolder.clearContext();
        response.setStatus(UNAUTHORIZED.value());
        response.setContentType(APPLICATION_JSON_UTF8_VALUE);
        response.setCharacterEncoding("UTF-8");
        log.error("JwtAuthenticationFailureHandler Authentication failed:", exception.getMessage());
        objectMapper.writeValue(response.getWriter(), CommonResponse.of(UNAUTHORIZED.toString(), exception.getMessage()));
    }
}
