import store from '../'
import {formatUserInfo} from './userInfo'

export function resetSearchResult({state, commit}) {
    commit('updateSearchlist', {
        type: 'user',
        list: []
    })
    commit('updateSearchlist', {
        type: 'team',
        list: []
    })
}

export function searchUsers({state, commit}, obj) {
    const im = state.im
    im.getUser(obj.account)
}

export function searchUserDone(obj) {
    console.log("searchUserDone....", obj);
    let code = obj.code;
    if(code != 20000) {
        console.error("searchUserDone", obj.response)
        return
    }

    store.commit('updateSearchlist', {
        type: 'user',
        list: obj.response
    })

    let updateUsers = formatUserInfo(obj.response)
    store.commit('updateUserInfo', updateUsers)

    /*
     let updateUsers = users.filter(item => {
       let account = item.account
       if (item.account === state.userUID) {
         return false
       }
       let userInfo = state.userInfos[account] || {}
       if (userInfo.isFriend) {
         return false
       }
       return true
     })
     updateUsers = updateUsers.map(item => {
       return formatUserInfo(item)
     })
     commit('updateUserInfo', updateUsers)
     if (done instanceof Function) {
       done(users)
     }*/
}

export function searchTeam({state, commit}, obj) {
    let {teamId, done} = obj
    const nim = state.nim
    nim.getTeam({
        teamId: teamId,
        done: function searchTeamDone(error, teams) {
            if (error) {
                if (error.code === 803) {
                    teams = []
                } else {
                    alert(error)
                    return
                }
            }
            if (!Array.isArray(teams)) {
                teams = [teams]
            }
            teams.forEach(team => {
                if (team.avatar && team.avatar.indexOf('nim.nosdn.127') > 0 && team.avatar.indexOf('?imageView') === -1) {
                    team.avatar = team.avatar + '?imageView&thumbnail=300y300'
                }
            })
            commit('updateSearchlist', {
                type: 'team',
                list: teams
            })
            if (done instanceof Function) {
                done(teams)
            }
        }
    })
}
