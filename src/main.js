import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@assets/js/rem';
import '@assets/css/base.less';

import common from './common';
Vue.use(common);
import config from './config/index';
Vue.use(config);

Vue.config.devtools = true;
Vue.config.productionTip = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
