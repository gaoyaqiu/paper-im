package com.gyq.im.server.service.friend;

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
    Boolean isFriend(Long uid, Long friendId);
}
