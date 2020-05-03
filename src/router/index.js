import Vue from 'vue';
import Router from 'vue-router';

import Index from "@/views/layout/Index.vue";
import Overview from "@/views/overview/Overview.vue";
import Task from "@/views/task/Task.vue";

const routesMap = [
  {
    name: 'Index',
    path: '/',
    component: Index,
    children: [{
      name: 'Overview',
      path: 'Overview',
      component: Overview,
      children: []
    }, {
      name: 'Task',
      path: 'Task',
      component: Task,
      children: []
    }]
  }
];
Vue.use(Router);
export default new Router({
  mode: 'hash',
  routes: routesMap
});
