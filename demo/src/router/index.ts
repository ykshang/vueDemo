import { createRouter, createWebHistory } from 'vue-router'
const routers = [
  {
    path: '/', // 主页
    name: 'home',
    component: () => import('@/views/Home/Home.vue'),
    children: [
      {
        path: '/about',
        name: 'about',
        component: () => import('@/views/Demo/AboutView.vue'),
      },
      {
        path: '/news/:id',
        name: 'news',
        props: true,
        component: () => import('@/views/Demo/NewsView.vue'),
      },
      {
        path: '/AttrView',
        name: 'attes',
        component: () => import('@/views/Demo/AttrView.vue'),
      },
      {
        path: '/refs',
        name: 'refs',
        component: () => import('@/views/Demo/refs/RefParent.vue'),
      },
      {
        path: '/inject',
        name: 'inject',
        component: () => import('@/views/Demo/inject/Parent.vue'),
      },
    ],
  },
  {
    path: '/login', // 登录页面
    name: 'login',
    component: () => import('@/views/Login/Login.vue'),
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routers,
})

export default router
