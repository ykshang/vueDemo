import Vue from 'vue';
import Router from 'vue-router';

const Index = resolve => {
  require.ensure(['../views/layout/Index.vue'], () => {
    resolve(require('../views/layout/Index.vue'));
  }, 'Index');
};
const routesMap = [
  {
    path: '/',
    name: 'Index',
    component: Index,
    // alias: '/',
    // meta: {
    //   // title: Vue.t("calcStorLang.calculateStorage"),
    //   // des: Vue.t('base.index')
    // },
    children: []
  }
];
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: routesMap
});
