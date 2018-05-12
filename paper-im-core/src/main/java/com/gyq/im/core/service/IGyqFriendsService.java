package com.gyq.im.core.service;

import com.gyq.im.core.entity.GyqFriends;
import com.gyq.im.core.mapper.GyqFriendsMapper;

import java.util.Map;

public interface IGyqFriendsService extends IBaseService<GyqFriends, GyqFriendsMapper> {
    void deleteFriend(Map<String, Object> params);
}