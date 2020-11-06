import qs from 'qs';
import { http } from '../config/axios/axios';

import { loginApiInfo, sendCodeApiInfo } from './api';

export const login = params => {
    return http[loginApiInfo.method](`${loginApiInfo.url}?${qs.stringify(params)}`);
};
export const sendCode = params => {
    return http[sendCodeApiInfo.method](`${sendCodeApiInfo.url}?${qs.stringify(params)}`);
};
