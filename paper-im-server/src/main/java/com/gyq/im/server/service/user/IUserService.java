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
    Long add(User user);
}
