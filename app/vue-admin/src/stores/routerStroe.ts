import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

export const useRouterStore = defineStore('Router', () => {
  const router = useRouter()
  const currentRouterPath = ref('/Home/HomePage')
  // 路由跳转 push
  const push = (path: string) => {
    if (currentRouterPath.value !== path) {
      currentRouterPath.value = path
      router.push(path)
    }
  }
  // 监控路由变化，实现路由跳转
  // watch(
  //   () => currentRouterPath.value,
  //   (newPath) => {
  //     console.count(`watch newPath: ${newPath}`)
  //     router.push(newPath)
  //   },
  //   { immediate: true }
  // )
  return { currentRouterPath, push }
})
