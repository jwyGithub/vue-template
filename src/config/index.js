import { http } from './axios/axios.js';
export default {
    install(Vue) {
        Vue.prototype.$axios = http;
    }
};
