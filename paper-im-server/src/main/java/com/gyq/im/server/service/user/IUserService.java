package com.gyq.im.server.service.user;

import com.gyq.im.server.controller.user.User;

/**
 * @auther gaoyaqiu
 * @date 2018/3/25
 */
public interface IUserService {

    /**
     * 新增用户.
     *
     * @param user
     * @return
     */
    Long save(User user);


    /**
     * 根据主键查询用户信息.
     *
     * @param userUid
     * @return
     */
    User getUser(long userUid);

    /**
     * 根据登录名称查询用户信息.
     *
     * @param loginName
     * @return
     */
    User getUser(String loginName);
}
