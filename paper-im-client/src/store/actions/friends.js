/*
 * 用户关系及好友关系托管
 */

import store from '../'

// 好友关系，回调
export function onFriends(friends) {
    friends = friends.map(item => {
        if (typeof item.isFriend !== 'boolean') {
            item.isFriend = true
        }
        return item
    })
    store.commit('updateFriends', friends)
    // 更新好友信息字典，诸如昵称
    store.commit('updateUserInfo', friends)
}

// 更新好友资料，添加好友成功
export function onUpdateFriend(obj) {
    let code = obj.code;
    if (code != "20000") {
        return false
    }

    let friends = obj.response;

    // 更新好友列表
    store.commit('updateFriends', friends)
    // 更新好友资料
    store.commit('updateUserInfo', friends)
}

// 删除好友
export function onDeleteFriend(obj) {
    let code = obj.code;
    if (code != "20000") {
        return false
    }

    let friends = obj.response.friendUid;
    // 更新好友列表
    store.commit('updateFriendsByUid', friends);
    // 更新好友资料
    store.commit('updateUserInfoByUid', friends);
}

export function onSyncFriendAction(obj) {
}

export function updateFriend({state, commit}, friend) {
}

export function addFriend({state, commit}, uid) {
    const im = state.im

    im.addFriend(uid)
}

export function deleteFriend({state, commit}, uid) {
    const im = state.im
    im.deleteFriend(uid)
}


