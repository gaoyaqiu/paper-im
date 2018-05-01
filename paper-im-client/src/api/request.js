import axios from 'axios'
import {router} from '../router'
import config from '../configs'

const instance = axios.create({baseURL: config.apiUrl});

instance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        location.href = config.loginUrl
    }
    return Promise.reject(error);
});

export default instance;


