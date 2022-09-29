import Vuex from 'vuex';
import Vue from 'vue';
import auth from './module/auth';
import dashboard from './module/dashboard';
import layout from './module/layout';


Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth: auth,
        layout: layout,
        dashboard: dashboard,
    },
});
