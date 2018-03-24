package com.gyq.im.server.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gyq.im.common.exception.CommonResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.context.SecurityContextHolder;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;

/**
 * @author gaoyaqiu
 */
public class RestLoginFailureHandler {
    private static Logger logger = LoggerFactory.getLogger(RestLoginFailureHandler.class);

    private ObjectMapper objectMapper;

    public RestLoginFailureHandler(ObjectMapper objectMapper) {
        this.objectMapper = objectMapper;
    }

    public void handelFailure(HttpServletResponse response, AuthenticationException e) throws IOException {
        SecurityContextHolder.clearContext();
        response.setStatus(FORBIDDEN.value());
        response.setContentType(APPLICATION_JSON_UTF8_VALUE);
        response.setCharacterEncoding("UTF-8");
        logger.error("RestLoginFailureHandler Authentication failed.", e);
        objectMapper.writeValue(response.getWriter(), CommonResponse.of(FORBIDDEN.toString(), e.getMessage()));
    }
}
