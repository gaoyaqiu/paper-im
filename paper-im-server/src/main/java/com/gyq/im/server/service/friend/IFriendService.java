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
    Boolean isFriend(String uid, String friendId) throws CommonInternalErrorException;

    /**
     * 添加好友,并返回好友信息.
     *
     * @param from
     * @param friendUid
     * @return
     * @throws CommonInternalErrorException
     */
    User addFriend(String from, String friendUid) throws CommonInternalErrorException;

    /**
     * 删除好友 （物理删除）.
     *
     * @param from
     * @param friendUid
     * @return
     * @throws CommonInternalErrorException
     */
    void deleteFriend(String from, String friendUid) throws CommonInternalErrorException;
}
