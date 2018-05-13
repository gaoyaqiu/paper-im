package com.gyq.im.core.mapper;

import com.gyq.im.core.entity.GyqUser;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Map;

public interface GyqUserMapper extends IBaseMapper<GyqUser> {
    List<GyqUser> selectListByUid(@Param(value = "params") Map<String, Object> params);
}