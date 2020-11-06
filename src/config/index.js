import Vue from 'vue';
import { http } from './axios/axios.js';
Vue.prototype.$axios = http;
