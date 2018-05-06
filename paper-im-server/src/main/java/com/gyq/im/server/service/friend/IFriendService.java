package com.gyq.im.server.service.friend;

import com.gyq.im.common.exception.CommonInternalErrorException;
import com.gyq.im.server.controller.user.User;

/**
 * @author gaoyaqiu
 * @date 2018/5/6
 */
public interface IFriendService {

    /**
     * 验证是否是自己好友.
     *
     * @param uid
     * @param friendId
     * @return
     */
    Boolean isFriend(Long uid, Long friendId) throws CommonInternalErrorException;

    User addFriend(Long from, Long friendUid) throws CommonInternalErrorException;
}
