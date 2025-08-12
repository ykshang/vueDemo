import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/AboutView.vue'),
    },
    {
      path: '/news/:id',
      name: 'news',
      props: true,
      component: () => import('@/views/NewsView.vue'),
    },
    {
      path: '/AttrView',
      name: 'attes',
      component: () => import('@/views/AttrView.vue'),
    },
    {
      path: '/refs',
      name: 'refs',
      component: () => import('@/views/refs/RefParent.vue'),
    },
    {
      path: '/inject',
      name: 'inject',
      component: () => import('@/views/inject/Parent.vue'),
    },
  ],
})

export default router
