import axios from 'axios';
import baseUrl from '../envConfig/envConfig';
import Loading from '../../common/components/loading';
import Vue from 'vue';
Vue.use(Loading);

export const http = axios.create({
    baseURL: baseUrl,
    withCredentials: true,
    timeOut: 10000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
});

// 添加请求拦截器
http.interceptors.request.use(
    config => {
        Vue.prototype.$loading();
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// 添加响应拦截器
http.interceptors.response.use(
    response => {
        Vue.prototype.$loading('off');
        if (response.status === 200) {
        }
        return response.data;
    },
    error => {
        return Promise.reject(error);
    }
);
