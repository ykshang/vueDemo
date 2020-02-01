// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import vueGlobal from './util/vueGlobal';
import Vuex from 'vuex';
import 'font-awesome/css/font-awesome.css';

Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false;

Object.keys(vueGlobal).forEach(key => {
  Vue.prototype['$' + key] = vueGlobal[key];
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
