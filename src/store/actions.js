import { login, sendCode } from '@/apis';
import { USER_LOGIN, SET_USER_TOKEN, SEND_CODE } from '@/store/mutation-types';

export default {
    async userLogin({ commit }, payload) {
        try {
            await login(payload).then(res => {
                commit(USER_LOGIN, res);
            });
        } catch (err) {
            console.log(err);
        }
    },
    async send({ commit }, payload) {
        await sendCode(payload).then(res => {
            commit(SEND_CODE, res);
        });
    },
    setUserToken({ commit }, payload) {
        commit(SET_USER_TOKEN, payload);
    }
};
