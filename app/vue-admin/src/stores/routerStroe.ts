import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export const useRouterStore = defineStore('Router', () => {
  const router = useRouter()
  const currentRouterPath = ref('/Home/HomePage')
  const push = (path: string) => {
    currentRouterPath.value = path
  }
  // 监控路由变化，实现路由跳转
  watch(
    () => currentRouterPath.value,
    (newPath) => {
      router.push(newPath)
    },
  )
  return { currentRouterPath, push }
})
