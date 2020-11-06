import Vue from 'vue';
import Vuex from 'vuex';
import state from '@/store/state';
import actions from '@/store/actions';
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
    modules: {},
    plugins: [vuexLocal.plugin]
});
