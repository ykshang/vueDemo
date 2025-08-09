import './assets/main.css'

import { createApp } from 'vue'
// 引入 pinia
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入 ElementPlus UI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(ElementPlus)
// 应用pinia
app.use(createPinia())
app.use(router)

app.mount('#app')
