package com.gyq.im.core.mapper;

import com.gyq.im.core.entity.GyqFriends;
import org.apache.ibatis.annotations.Param;

import java.util.Map;

public interface GyqFriendsMapper extends IBaseMapper<GyqFriends> {

    void deleteFriend(@Param(value = "params") Map<String, Object> params);
}