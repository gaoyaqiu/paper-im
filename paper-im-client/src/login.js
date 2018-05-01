import Vue from 'vue'
// 添加Fastclick移除移动端点击延迟
import FastClick from 'fastclick'
// 添加手势触摸事件，使用方法如 v-touch:swipeleft
import VueTouch from './plugins/touchEvent'
import request from './api/request'
import cookie from './utils/cookie'
import config from './configs'

FastClick.attach(document.body)

Vue.use(VueTouch)

var formData = new Vue({
    el: '#form-data',
    data: {
        logo: config.logo,
        account: '',
        password: '',
        errorMsg: ''
    },
    mounted() {
        this.$el.style.display = ""
    },
    methods: {
        login() {
            if (this.account === '') {
                this.errorMsg = '帐号不能为空'
                return
            } else if (this.password === '') {
                this.errorMsg = '密码不能为空'
                return
            } else if (this.password.length < 6) {
                this.errorMsg = '密码至少需要6位'
                return
            }
            this.errorMsg = ''
            var data = {
                userName: this.account,
                passWord: this.password
            }

            doLogin(data).then(token => {
                // 服务端帐号均为小写
                cookie.setCookie('uid', this.account.toLowerCase())
                cookie.setCookie('sdktoken', token)

                request.defaults.headers.common.Authorization = 'Bearer ' + token
                location.href = config.homeUrl
            }, (error) => {
                const response = error.response.data;
                this.errorMsg = response.msg;
                if (error.response.status === 403) {
                    console.log(response.msg);
                } else {
                    console.log(response.data);
                }
            })
        },
        regist() {
            location.href = config.registUrl
        }
    },
})

var doLogin = function (data) {
    return new Promise(((resolve, reject) => {
        request.post('/b/user/login', data).then((response) => {
            let token = response.data.data.token;
            request.defaults.headers.common.Authorization = token;
            resolve(token);
        }).catch(reject);
    }));
}
