// 引入路由器
import { createRouter, createWebHistory } from 'vue-router'

// 创建路由器
const router = createRouter({
  // history 模式
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/Home', component: import('@/views/Home.vue') },
    { path: '/About', component: import('@/views/About.vue') },
    { path: '/News', component: import('@/views/News.vue') },
  ],
})

export default router
