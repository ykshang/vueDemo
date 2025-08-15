import '@/style/main.scss'
import { createApp } from 'vue'
// 引入 pinia
import { createPinia } from 'pinia'
import router from './router'
// 引入 ElementPlus UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
// 应用pinia
app.use(createPinia())
app.use(router)
// 挂载到 APP 元素
app.mount('#app')
