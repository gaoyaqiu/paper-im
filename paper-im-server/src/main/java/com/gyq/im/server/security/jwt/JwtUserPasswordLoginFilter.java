package com.gyq.im.server.security.jwt;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.gyq.im.common.exception.CommonResponse;
import com.gyq.im.common.tools.json.JsonConverter;
import com.gyq.im.server.security.management.UsernamePasswordLoginCommand;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AbstractAuthenticationProcessingFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

import static org.springframework.http.HttpMethod.POST;
import static org.springframework.http.HttpStatus.OK;
import static org.springframework.http.MediaType.APPLICATION_JSON_UTF8_VALUE;
import static org.springframework.util.StringUtils.isEmpty;

/**
 * @author gaoyaqiu
 */
public class JwtUserPasswordLoginFilter extends AbstractAuthenticationProcessingFilter {
    private ObjectMapper objectMapper = JsonConverter.getObjectMapper();
    private RestLoginFailureHandler loginFailureHandler = new RestLoginFailureHandler(objectMapper);

    public JwtUserPasswordLoginFilter(String processesUrl,
                                      AuthenticationManager authenticationManager) {
        super(processesUrl);
        setAuthenticationManager(authenticationManager);
        setAuthenticationFailureHandler(new JwtAuthenticationFailureHandler(objectMapper));
    }

    @Override
    public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException, IOException, ServletException {
        try {
            return getAuthentication(request);
        } catch (Exception e) {
            throw new AuthenticationServiceException(e.getMessage(), e.getCause());
        }
    }

    private Authentication getAuthentication(HttpServletRequest request) {
        if (!POST.name().equals(request.getMethod())) {
            throw new AuthenticationServiceException("只支持POST方法.");
        }

        UsernamePasswordLoginCommand loginCommand;
        try {
            loginCommand = objectMapper.readValue(request.getReader(), UsernamePasswordLoginCommand.class);
        } catch (Exception e) {
            throw new AuthenticationServiceException("无法解析登录请求.");
        }

        String userName = loginCommand.getUserName();
        String passWord = loginCommand.getPassWord();

        if (isEmpty(userName) || isEmpty(passWord)) {
            throw new AuthenticationServiceException("用户名或密码没有提供.");
        }

        if (userName.length() > 16 || passWord.length() > 30) {
            throw new AuthenticationServiceException("用户名或密码错误.");
        }

        UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(userName, passWord);

        return this.getAuthenticationManager().authenticate(token);
    }

    @Override
    protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain,
                                            Authentication authResult) throws IOException, ServletException {
        JwtToken jwtToken = (JwtToken) authResult.getCredentials();
        response.setStatus(OK.value());
        response.setContentType(APPLICATION_JSON_UTF8_VALUE);
        objectMapper.writeValue(response.getWriter(), CommonResponse.newBuilder().data(jwtToken).build());
    }


    @Override
    protected void unsuccessfulAuthentication(HttpServletRequest request, HttpServletResponse response,
                                              AuthenticationException e) throws IOException, ServletException {
        loginFailureHandler.handelFailure(response, e);

    }

}
