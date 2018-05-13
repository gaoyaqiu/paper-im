/*
 * 用户账号信息
 */

import store from '../'
import config from '../../configs'
import util from '../../utils'
import {transformDate} from '../../utils/dateUtil'

export function formatUserInfo(obj) {
    let gender = ''
    switch (obj.userGender) {
        case 1:
            gender = '男'
            break
        case 2:
            gender = '女'
            break
        case 0:
            gender = ''
            break
    }
    let custom = obj.custom || ''
    try {
        custom = JSON.parse(custom)
    } catch (e) {
        custom = {
            data: custom
        }
    }

    if (!obj.userFace) {
        obj.userFace = config.defaultUserIcon
    }

    let result = Object.assign(obj, {
        uid: obj.userUid,
        account: obj.loginName,
        nick: obj.userNickName || '',
        avatar: obj.userFace || config.defaultUserIcon,
        birth: obj.userBirthday ? transformDate(obj.userBirthday) : '',
        email: obj.userEmail || '',
        tel: obj.userMobile || '',
        gender,
        sign: obj.userSign || '',
        custom,
        createTime: obj.userCreated || (new Date()).getTime(),
        updateTime: obj.userUpdated || (new Date()).getTime(),
        isFriend: obj.isFriend
    })

    return result
}

export function onMyInfo(obj) {
    let code = obj.code;
    if (code != "20000") {
        console.error("onMyInfo", obj.response)
        return
    }

    obj = util.mergeObject(store.state.myInfo, obj.response);
    let myInfo = formatUserInfo(obj)
    store.commit('updateMyInfo', myInfo)
}

export function onUserInfo(users) {
    if (!Array.isArray(users)) {
        users = [users]
    }
    users = users.map(formatUserInfo)
    store.commit('updateUserInfo', users)
}
