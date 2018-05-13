package com.gyq.im.server.service.user;

import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.common.tools.utils.ArrayUtil;
import com.gyq.im.common.tools.utils.BeanCopierUtils;
import com.gyq.im.common.tools.utils.MD5EncryptUtil;
import com.gyq.im.common.tools.utils.RandomUtil;
import com.gyq.im.core.entity.GyqUser;
import com.gyq.im.core.service.IGyqUserService;
import com.gyq.im.server.controller.user.User;
import com.gyq.im.server.service.friend.IFriendService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.security.NoSuchAlgorithmException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import static com.google.common.collect.Lists.newArrayList;

/**
 * @auther gaoyaqiu
 * @date 2018/3/25
 */
@Slf4j
@Service
public class UserServiceImpl implements IUserService {

    @Autowired
    private IGyqUserService userService;

    @Autowired
    private IFriendService friendService;

    @Override
    public Long save(User user) {

        Map<String, Object> params = new HashMap<>();
        params.put("userLoginName", user.getLoginName());
        GyqUser gyqUser;
        try {
            gyqUser = userService.findObj(params);
        } catch (Exception e) {
            log.error("查询用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        if (null != gyqUser) {
            log.error("该登录已被占用[{}]", user.getLoginName());
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR_USER_LOGIN_NAME_REPEATED);
        }

        gyqUser = new GyqUser();
        gyqUser.setUserNickName(user.getUserNickName());
        gyqUser.setUserLoginName(user.getLoginName());

        try {
            // 设置密码
            String salt = RandomUtil.getRandomStr(6);
            gyqUser.setUserSalt(salt);

            gyqUser.setUserPwd(MD5EncryptUtil.md5(user.getPassWord() + salt));
            gyqUser = userService.addBasic(gyqUser);
        } catch (NoSuchAlgorithmException e) {
            log.error("生成md5异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        } catch (Exception e) {
            log.error("创建用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        return gyqUser.getUserUid();
    }

    @Override
    public User getUserById(String userUid) {
        User user = new User();
        GyqUser gyqUser;
        try {
            gyqUser = userService.findObjByKey(Long.valueOf(userUid));
        } catch (Exception e) {
            log.error("查询用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        if (null == gyqUser) {
            log.error("用户id[{}]不存在", userUid);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR_USER_DATA_NOT_FOUNT);
        }

        BeanCopierUtils.copyProperties(gyqUser, user);
        user.setLoginName(gyqUser.getUserLoginName());
        user.setUserUid(gyqUser.getUserUid().toString());

        return user;
    }

    @Override
    public User getUser(String loginName) {
        Map<String, Object> params = new HashMap<>();
        params.put("userLoginName", loginName);
        params.put("userStatus", GlobalEnums.Status.DELETED.getValue());

        User user = new User();
        GyqUser gyqUser;
        try {
            gyqUser = userService.findObj(params);
        } catch (Exception e) {
            log.error("查询用户异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        if (null == gyqUser) {
            log.error("用户登录名[{}]不存在", loginName);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR_USER_DATA_NOT_FOUNT);
        }

        BeanCopierUtils.copyProperties(gyqUser, user);
        user.setLoginName(gyqUser.getUserLoginName());
        user.setUserUid(gyqUser.getUserUid().toString());

        return user;
    }

    @Override
    public User getUser(String loginName, String fromUid) {
        User user = getUser(loginName);

        // 查询对方是否是自己好友
        if (fromUid != null) {
            boolean isFriend = friendService.isFriend(fromUid, user.getUserUid());
            user.setIsFriend(isFriend);
        }

        return user;
    }

    @Override
    public User getUserById(String userUid, String fromUid) {
        User user = getUserById(userUid);

        // 查询对方是否是自己好友
        if (fromUid != null) {
            boolean isFriend = friendService.isFriend(fromUid, user.getUserUid());
            user.setIsFriend(isFriend);
        }

        return user;
    }

    @Override
    public List<User> findFriends(String from) {
        Map<String, Object> params = new HashMap<>();
        params.put("userUid", from);
        params.put("userStatus", GlobalEnums.Status.DELETED.getValue());
        List<User> list = newArrayList();
        List<GyqUser> userList = userService.findFriends(params);
        if (!ArrayUtil.isNullOrEmpty(userList)) {
            list = userList.stream().map(gyqUser -> {
                User user = new User();
                BeanCopierUtils.copyProperties(gyqUser, user);
                user.setLoginName(gyqUser.getUserLoginName());
                user.setUserUid(gyqUser.getUserUid().toString());
                user.setIsFriend(true);
                return user;
            }).collect(Collectors.toList());
        }

        return list;
    }

}
