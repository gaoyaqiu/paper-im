package com.gyq.im.core.service;

import com.gyq.im.core.mapper.GyqUserMapper;
import com.gyq.im.core.entity.GyqUser;

import java.util.List;
import java.util.Map;

public interface IGyqUserService extends IBaseService<GyqUser, GyqUserMapper> {

    List<GyqUser> findFriends(Map<String, Object> params);
}