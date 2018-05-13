/*
 * SDK连接相关
 */

import config from '@/configs'
import {onMyInfo} from './userInfo'
import {onSearchUser} from './search'
import {onUpdateFriend, onDeleteFriend} from './friends'
import util from '../../utils'

export function initNimSDK({state, commit, dispatch}, loginInfo) {
    dispatch('showLoading')

    window.im = state.im = {
        url: config.wsUrl + '/' + loginInfo.uid,
        ws: null,
        init: function () {
            console.log("init...")
            this.ws = new WebSocket(this.url);
            this.ws.onopen = function () {
                console.log('WebSocket connection opened.');
                if (loginInfo) {
                    // 连接上以后更新uid
                    commit('updateUserUID', loginInfo)

                    im.onsync();
                    dispatch('hideLoading')
                }
            };
            this.ws.onmessage = function (event) {
                console.log('Received: ', event.data);
                im.onmsg(event.data);
            };
            this.ws.onclose = function () {
                console.log('WebSocket connection closed.');
                alert('网络连接状态异常')
                location.href = config.loginUrl
            };
        },
        onsync: function () {
            // 同步个人信息
            var data = {
                service: 'user',
                cmd: 'syncMyInfo',
                params: {
                    'from': loginInfo.uid
                }
            }
            this.onsend(data)

            // 同步好友消息
            var data = {
                service: 'user',
                cmd: 'syncFriends',
                params: {
                    'from': loginInfo.uid
                }
            }
            this.onsend(data)
        },
        onsend: function (data) {
            this.ws.send(JSON.stringify(data));
        },
        onmyinfo: function () {


        },
        // 消息处理
        onmsg: function (response) {
            let msg = JSON.parse(response);
            let cmd = msg.cmd;
            let service = msg.service;

            if (service == "user") {

                switch (cmd) {
                    //  获取当前用户信息完成
                    case 'syncMyInfo':
                        onMyInfo(msg);
                        break;
                    // 搜索用户完成
                    case 'getUsers':
                        onSearchUser(msg)
                        break;
                    // 添加好友回调
                    case 'addFriend':
                        onUpdateFriend(msg)
                        break
                    // 删除回调
                    case 'deleteFriend':
                        onDeleteFriend(msg)
                        break
                    // 同步好友信息
                    case 'syncFriends':
                        im.onSyncFriends(msg)
                        break
                    default:
                        break;

                }
            }
        },
        // 搜索用户(精确搜索)
        getUser: function (loginName) {
            var data = {
                service: 'user',
                cmd: 'getUsers',
                params: {
                    'from': loginInfo.uid,
                    'loginName': loginName
                }
            }
            this.onsend(data)
        },
        // 添加好友
        addFriend: function (friendUid) {
            var data = {
                service: 'user',
                cmd: 'addFriend',
                params: {
                    'from': loginInfo.uid,
                    'friendUid': friendUid
                }
            }
            this.onsend(data)
        },
        deleteFriend: function (friendUid) {
            var data = {
                service: 'user',
                cmd: 'deleteFriend',
                params: {
                    'from': loginInfo.uid,
                    'friendUid': friendUid
                }
            }
            this.onsend(data)
        },
        onSyncFriends: function (data) {

            let friends = data.response
            // 更新好友列表
            commit('updateFriends', friends)
            commit('updateUserInfoByArray', friends)
        }
    }

    im.init();

    // 初始化SDK
    /* window.nim = state.nim = {
 // debug: true && { api: 'info', style: 'font-size:12px;color:blue;background-color:rgba(0,0,0,0.1)' },
         url: config.url,
         account: loginInfo.uid,
         token: loginInfo.sdktoken,
         syncSessionUnread: true,
         syncRobots: true,
         autoMarkRead: true, // 默认为true
         init: function () {
             console.log("init...")
             ws = new WebSocket(this.url + this.account);
         },
         onconnect: function onConnect(event) {
             if (loginInfo) {
                 // 连接上以后更新uid
                 commit('updateUserUID', loginInfo)
             }
         },
         onerror: function onError(event) {
             // alert(JSON.stringify(event))
             debugger
             alert('网络连接状态异常')
             location.href = config.loginUrl
         },
         onwillreconnect: function onWillReconnect() {
             console.log(event)
         },
         ondisconnect: function onDisconnect(error) {
             alert("111");
             switch (error.code) {
                 // 账号或者密码错误, 请跳转到登录页面并提示错误
                 case 302:
                     pageUtil.turnPage('帐号或密码错误', 'login')
                     break
                 // 被踢, 请提示错误后跳转到登录页面
                 case 'kicked':
                     let map = {
                         PC: '电脑版',
                         Web: '网页版',
                         Android: '手机版',
                         iOS: '手机版',
                         WindowsPhone: '手机版'
                     }
                     let str = error.from
                     let errorMsg = `你的帐号于${util.formatDate(new Date())}被${(map[str] || '其他端')}踢出下线，请确定帐号信息安全!`
                     pageUtil.turnPage(errorMsg, 'login')
                     break
                 default:
                     break
             }
         },
         // // 多端登录
         // onloginportschange: onLoginPortsChange,
         // 用户关系及好友关系
         onblacklist: onBlacklist,
         onsyncmarkinblacklist: onMarkInBlacklist,
         // onmutelist: onMutelist,
         // onsyncmarkinmutelist: onMarkInMutelist,
         onfriends: onFriends,
         onsyncfriendaction: onSyncFriendAction,
         // 机器人
         onrobots: onRobots,
         // 用户名片 - actions/userInfo
         onmyinfo: onMyInfo,
         onupdatemyinfo: onMyInfo,
         onusers: onUserInfo,
         onupdateuser: onUserInfo,
         // // 群组
         onteams: onTeams,
         onsynccreateteam: onSynCreateTeam,
         syncTeams: true,
         onteammembers: onTeamMembers,
         onCreateTeam: onCreateTeam,
         onDismissTeam: onDismissTeam,
         onUpdateTeam: onUpdateTeam,
         onAddTeamMembers: onAddTeamMembers,
         onRemoveTeamMembers: onRemoveTeamMembers,
         onUpdateTeamManagers: onUpdateTeamManagers,
         onupdateteammember: onUpdateTeamMember,
         onUpdateTeamMembersMute: onUpdateTeamMembersMute,
         // // 会话
         onsessions: onSessions,
         onupdatesession: onUpdateSession,
         // // 消息
         onroamingmsgs: onRoamingMsgs,
         onofflinemsgs: onOfflineMsgs,
         onmsg: onMsg,
         // // 系统通知
         onsysmsg: onSysMsg,
         onofflinesysmsgs: onSysMsgs,
         onupdatesysmsg: onSysMsg, // 通过、拒绝好友申请会收到此回调

         onsysmsgunread: onSysMsgUnread,
         onupdatesysmsgunread: onSysMsgUnread,

         onofflinecustomsysmsgs: onCustomSysMsgs,
         oncustomsysmsg: onCustomSysMsgs,
         // // 同步完成
         onsyncdone: function onSyncDone() {
             dispatch('hideLoading')
             // 说明在聊天列表页
             if (store.state.currSessionId) {
                 dispatch('setCurrSession', store.state.currSessionId)
             }
         }
     }*/
}
