//core apps
import Vue from 'vue';
import App from './App.vue';

//third party apps
import router from './router';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Vuelidate from 'vuelidate';
import VueApexCharts from 'vue-apexcharts';

// third party css
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

// custom css
import '@/assets/css/styles.css';


Vue.use(VueApexCharts)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuelidate)

Vue.component('apexchart', VueApexCharts)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
