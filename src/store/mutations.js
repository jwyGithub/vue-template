import { SET_USER_TOKEN, USER_LOGIN, SEND_CODE } from '@/store/mutation-types';

export default {
    [SET_USER_TOKEN](state, payload) {
        console.log(state);
        console.log(payload);
    },
    // 用户登录
    [USER_LOGIN](state, payload) {
        state.userInfo = payload;
        state.userToken = payload.token;
    },
    [SEND_CODE](state, payload) {
        console.log(state, payload);
    }
};
