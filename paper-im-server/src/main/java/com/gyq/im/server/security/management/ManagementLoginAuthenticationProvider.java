package com.gyq.im.server.security.management;

import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.tools.utils.MD5EncryptUtil;
import com.gyq.im.core.entity.GyqUser;
import com.gyq.im.core.service.IGyqUserService;
import com.gyq.im.server.security.jwt.JwtAuthenticationToken;
import com.gyq.im.server.security.jwt.JwtToken;
import com.gyq.im.server.security.jwt.ManagementJwtService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

import static com.gyq.im.server.security.management.ManagementRole.ADMIN;
import static com.gyq.im.server.security.management.ManagementUser.of;


/**
 * 验证用户有效性.
 *
 * @author gaoyaqiu
 */
@Slf4j
@Component
public class ManagementLoginAuthenticationProvider implements AuthenticationProvider {
    private static final String AUTHENTICATION_FAILED_MESSAGE = "账号或密码错误.";

    // 用于发系统消息
    public static final String ADMIN_USER = "admin";

    private ManagementJwtService jwtService;

    @Autowired
    private IGyqUserService gyqUserService;

    @Autowired
    public ManagementLoginAuthenticationProvider(ManagementJwtService jwtService) {
        this.jwtService = jwtService;
    }

    @Override
    public Authentication authenticate(Authentication authentication) throws AuthenticationException {
        String userName = (String) authentication.getPrincipal();
        String password = (String) authentication.getCredentials();

        Map<String, Object> params = new HashMap<>();
        params.put("userLoginName", userName);
        params.put("userStatus", GlobalEnums.Status.DELETED.getValue());

        GyqUser gyqUser = null;
        try {
            gyqUser = gyqUserService.findObj(params);
        } catch (Exception e) {
            log.error("查询用户异常[{}]", userName, e);
        }
        if (null == gyqUser) {
            log.error("该用户不存在[{}]", userName);
            throw new BadCredentialsException(AUTHENTICATION_FAILED_MESSAGE);
        }

        String reqPwd;
        try {
            reqPwd = MD5EncryptUtil.md5(password + gyqUser.getUserSalt());
        } catch (NoSuchAlgorithmException e) {
            log.error("生成md5签名异常", e);
            throw new BadCredentialsException(AUTHENTICATION_FAILED_MESSAGE);
        }

        if (!reqPwd.equals(gyqUser.getUserPwd())) {
            log.error("密码错误[{}]", userName);
            throw new BadCredentialsException(AUTHENTICATION_FAILED_MESSAGE);
        }

        JwtToken jwtToken = jwtService.generateJwtToken(of(ADMIN_USER, ADMIN));
        return new JwtAuthenticationToken(null, jwtToken, null);
    }

    @Override
    public boolean supports(Class<?> authentication) {
        return UsernamePasswordAuthenticationToken.class.isAssignableFrom(authentication);
    }
}
