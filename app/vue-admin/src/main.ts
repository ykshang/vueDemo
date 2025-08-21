import ElementPlus from 'element-plus'
/* 引入 pinia */
import { createPinia } from 'pinia' // pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // pinia 持久化

import { createApp } from 'vue'
/* 引入路由 */
import { createRouter, createWebHistory } from 'vue-router'
import { routes } from 'vue-router/auto-routes'

import App from './App.vue'
// 自定义样式 + element-plus 的主题系统
import '~/styles/index.scss'

import 'uno.css'
// unplugin-vue-components/vite 可以解决组件样式的自动引入
// 但是无法解决组件作为 js api 调用时的样式引入
// 这几个无法自动导入，单独引入
import 'element-plus/theme-chalk/src/message.scss'
import 'element-plus/theme-chalk/src/message-box.scss'
import 'element-plus/theme-chalk/src/notification.scss'

// eslint-disable-next-line no-console
console.log(routes)

// 引入 element-plus 的全量 css
// import 'element-plus/theme-chalk/src/index.scss'

const app = createApp(App)
// 引入 pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

app.use(pinia)

// 引入 element-plus
app.use(ElementPlus)

// 引入路由
app.use(createRouter({
  history: createWebHistory(),
  routes,
}))
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
