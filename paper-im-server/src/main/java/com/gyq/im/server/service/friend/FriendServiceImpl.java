package com.gyq.im.server.service.friend;

import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.core.entity.GyqFriends;
import com.gyq.im.core.service.IGyqFriendsService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Map;

import static com.google.common.collect.Maps.newHashMap;

/**
 * @author gaoyaqiu
 * @date 2018/5/6
 */
@Slf4j
@Service
public class FriendServiceImpl implements IFriendService {

    @Autowired
    private IGyqFriendsService gyqFriendsService;

    @Override
    public Boolean isFriend(Long uid, Long friendId) {
        Map<String, Object> params = newHashMap();
        params.put("fStatus", GlobalEnums.Status.DELETED.getValue());
        params.put("fUid", uid);
        params.put("fFriendUid", friendId);

        try {
            GyqFriends gyqFriends = gyqFriendsService.findObj(params);
            if (null != gyqFriends) {
                return true;
            }
        } catch (Exception e) {
            log.error("查询用户好友异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        return false;
    }
}
