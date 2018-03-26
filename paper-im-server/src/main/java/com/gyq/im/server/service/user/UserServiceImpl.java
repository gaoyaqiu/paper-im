package com.gyq.im.server.service.user;

import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.common.tools.utils.MD5EncryptUtil;
import com.gyq.im.common.tools.utils.RandomUtil;
import com.gyq.im.core.entity.GyqUser;
import com.gyq.im.core.service.IGyqUserService;
import com.gyq.im.server.controller.user.User;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.Map;

/**
 * @auther gaoyaqiu
 * @date 2018/3/25
 */
@Slf4j
@Service
public class UserServiceImpl implements IUserService {
    @Autowired
    private IGyqUserService userService;

    @Override
    public Long add(User user) {

        Map<String, Object> params = new HashMap<>();
        params.put("userLoginName", user.getUserLoginName());
        GyqUser gyqUser = null;
        try {
            gyqUser = userService.findObj(params);
        } catch (Exception e) {
            log.error("查询用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        if (null != gyqUser) {
            log.error("该登录已被占用[{}]", user.getUserLoginName());
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR_USER_LOGIN_NAME_REPEATED);
        }

        gyqUser = new GyqUser();
        gyqUser.setUserNickName(user.getUserNickName());
        gyqUser.setUserLoginName(user.getUserLoginName());

        try {
            // 设置密码
            String salt = RandomUtil.getRandomStr(6);
            gyqUser.setUserSalt(salt);

            gyqUser.setUserPwd(MD5EncryptUtil.md5(user.getUserPwd() + salt));
            gyqUser = userService.addBasic(gyqUser);
        } catch (NoSuchAlgorithmException e) {
            log.error("生成md5异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }catch (Exception e) {
            log.error("创建用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        return gyqUser.getUserUid();
    }
}