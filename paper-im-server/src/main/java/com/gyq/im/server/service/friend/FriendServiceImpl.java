package com.gyq.im.server.service.friend;

import com.google.common.base.Strings;
import com.gyq.im.common.enums.ApiCodeDefined;
import com.gyq.im.common.enums.GlobalEnums;
import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.core.entity.GyqFriends;
import com.gyq.im.core.service.IGyqFriendsService;
import com.gyq.im.server.controller.user.User;
import com.gyq.im.server.service.user.IUserService;
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

    @Autowired
    private IUserService userService;

    @Override
    public Boolean isFriend(String uid, String friendId) {
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

    @Override
    public User addFriend(String from, String friendUid) {
        GyqFriends gyqFriends = new GyqFriends();
        gyqFriends.setfUid(Long.valueOf(from));
        gyqFriends.setfFriendUid(Long.valueOf(friendUid));
        try {
            // 将对方添加为好友
            gyqFriendsService.addBasic(gyqFriends);

            // 将自己添加为对方好友
            GyqFriends gyqFriends2 = new GyqFriends();
            gyqFriends2.setfUid(Long.valueOf(friendUid));
            gyqFriends2.setfFriendUid(Long.valueOf(from));

            gyqFriendsService.addBasic(gyqFriends2);

            User user = userService.getUserById(friendUid);
            user.setIsFriend(true);
            return user;
        } catch (Exception e) {
            log.error("添加好友异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }
    }

    @Override
    public void deleteFriend(String from, String friendUid) throws CommonInternalErrorException {
        if (Strings.isNullOrEmpty(from) || Strings.isNullOrEmpty(friendUid)) {
            log.error("删除好友异常, 参数不能为空");
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }

        Map<String, Object> params = newHashMap();
        params.put("fUid", from);
        params.put("fFriendUid", friendUid);

        try {
            // 将对方从自己好友列表中删除
            gyqFriendsService.deleteFriend(params);

            // 将自己从为对方好友里删除
            params.put("fUid", friendUid);
            params.put("fFriendUid", from);

            gyqFriendsService.deleteFriend(params);

        } catch (Exception e) {
            log.error("添加好友异常", e);
            throw new CommonInternalErrorException(ApiCodeDefined.ERROR);
        }
    }
}
