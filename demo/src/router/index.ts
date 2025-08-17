import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Demo/HomeView.vue'),
    },
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
})

export default router
