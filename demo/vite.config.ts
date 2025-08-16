import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { viteMockServe } from 'vite-plugin-mock'

// https://vite.dev/config/

export default defineConfig(({ command }) => {
  return {
    plugins: [
      vue(),
      vueDevTools(),
      viteMockServe({
        mockPath: './src/mock', // mock文件夹路径
        enable: command === 'serve', // 只有开发环境才开启mock
      }),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
