import './assets/main.css'
import { createApp } from 'vue' // 引入 createApp 用于创建应用
import { createPinia } from 'pinia' // 引入 createPinia 用于创建 Pinia 实例
import App from './App.vue' // 引入 App.vue 作为应用的根组件
import router from './router' // 引入 router 用于配置路由

// 创建应用
const app = createApp(App)

app.use(createPinia())
app.use(router)

// 将应用挂载到 index.html id 为 app 的 DOM 元素上
app.mount('#app')
