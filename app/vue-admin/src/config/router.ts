import NProgress from 'nprogress'
import { createRouter, createWebHistory } from 'vue-router'

// 根据文件结构自动生成路由
import { routes } from 'vue-router/auto-routes'

// console.log(routes)
/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
})
/**
 * 路由守卫
 */
router.beforeEach(() => {
  NProgress.start() // 启动进度条
})

// 路由后置守卫
router.afterEach(() => {
  NProgress.done() // 完成进度条
})

// 导出路由实例
export default router
