import axios from 'axios'
import {router} from '../router'
import {AUTH_KEY} from '../store/modules/AuthStore'
import config from '../configs'

const instance = axios.create({baseURL: config.apiUrl});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem(AUTH_KEY);
        // router.replace('/login');
        location.href = config.loginUrl
    }
    return Promise.reject(error);
});

export default instance;


