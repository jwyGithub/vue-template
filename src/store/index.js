import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
import getters from '@/store/getter';
import mutations from '@/store/mutations';
import VuexPersistence from 'vuex-persist';
Vue.use(Vuex);
const vuexLocal = new VuexPersistence({
    storage: window.sessionStorage
});
export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules: {},
    plugins: [vuexLocal.plugin]
});
