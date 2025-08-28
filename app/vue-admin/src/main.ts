// 引入 ElementPlus
import ElementPlus from 'element-plus'
// 引入 pinia
import { createPinia } from 'pinia' // pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 持久化

import { createApp } from 'vue'
// 引入路由
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes' // 根据文件结构自动生成路由
// console.log(routes)

// 应用入口
import App from './App.vue'

/**
 * 自定义的全局样式，重置默认样式
 */
import '~/assets/styles/index.scss'

/**
 * 引入 unocss
 */
import 'uno.css'
/**
 * 解决 Element-plus 组件，使用 JS Api 调用时的样式缺失
 * unplugin-vue-components/vite 只能可以解决组件作为模板使用时，样式的自动引入，
 * 这几个无法自动导入，单独引入
 */
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/notification.scss'

// 引入 element-plus 的全量 css
// import 'element-plus/theme-chalk/src/index.scss'

// 创建 APP 实例
const app = createApp(App)
/**
 * pinia 相关
 */
const pinia = createPinia() // 创建 pinia 实例
pinia.use(piniaPluginPersistedstate) // pinia 持久化
app.use(pinia)

// 引入 element-plus
app.use(ElementPlus)

/**
 * 创建路由实例
 */
const router = createRouter({
  history: createWebHistory(),
  routes,
})
// 应用路由实例
app.use(router)
/**
 * 挂载应用
 */
app.mount('#app')

// SSG 方式启动
// import type { UserModule } from './types'
// import { ViteSSG } from 'vite-ssg'

// import { routes } from 'vue-router/auto-routes'
// import App from './App.vue'

// import '~/styles/index.scss'

// import 'uno.css'
// If you want to use ElMessage, import it.
// import 'element-plus/theme-chalk/src/message.scss'
// import 'element-plus/theme-chalk/src/message-box.scss'

// export const createApp = ViteSSG(
//   App,
//   {
//     routes,
//     base: import.meta.env.BASE_URL,
//   },
//   (ctx) => {
//     // install all modules under `modules/`
//     Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
//       .forEach(i => i.install?.(ctx))
//     // ctx.app.use(Previewer)
//   },
// )
