import Vue from 'vue'
// 添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
// 添加手势触摸事件，使用方法如 v-touch:swipeleft
import VueTouch from './plugins/touchEvent'
import config from './configs'
import request from './api/request'

FastClick.attach(document.body)


Vue.use(VueTouch)

var formData = new Vue({
    el: '#form-data',
    data: {
        logo: config.logo,
        account: '',
        password: '',
        nickname: '',
        errorMsg: ''
    },
    mounted() {
        this.$el.style.display = ""
    },
    methods: {
        regist() {
            if (this.account === '') {
                this.errorMsg = '帐号不能为空'
                return
            } else if (this.account.length > 20) {
                this.errorMsg = '帐号最多限20位'
                return
            } else if (/[^a-zA-Z0-9]/.test(this.account)) {
                this.errorMsg = '帐号限字母或数字'
                return
            } else if (this.nickname.length > 10) {
                this.errorMsg = '昵称限10位中文、英文或数字'
                return
            } else if (this.password === '') {
                this.errorMsg = '密码不能为空'
                return
            } else if (this.password.length < 6) {
                this.errorMsg = '密码至少需要6位'
                return
            }
            this.errorMsg = ''

            let accountLowerCase = this.account.toLowerCase()
            var data = {
                loginName: accountLowerCase,
                passWord: this.password,
                userNickName: this.nickname
            }

            doRegist(data).then(userUid => {
                location.href = config.loginUrl
            }, (res) => {
                const response = res.response.data;
                this.errorMsg = response.msg;
                console.log(response.data);
            })

            this.$forceUpdate()
        },
        login() {
            location.href = config.loginUrl
        }
    },
})

var doRegist = function (data) {
    return new Promise(((resolve, reject) => {
        request.post('/b/user/add', data).then((response) => {
            resolve(response.data.userUid);
        }, (response) => {
            reject(response)
        }).catch(reject);
    }));
}
