import { login, sendCode } from '@/apis';
import { USER_LOGIN, SET_USER_TOKEN, SEND_CODE } from '@/store/mutation-types';

export default {
    userLogin({ commit }, payload) {
        login(payload).then(res => {
            commit(USER_LOGIN, res);
        });
    },
    send({ commit }, payload) {
        sendCode(payload).then(res => {
            commit(SEND_CODE, res);
        });
    },
    setUserToken({ commit }, payload) {
        commit(SET_USER_TOKEN, payload);
    }
};
