import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeConfigStore = defineStore(
  'ThemeConfig',
  () => {
    const isMenuCollapse = ref(false)
    const changeMenuCollapse = (val: boolean) => {
      isMenuCollapse.value = val
    }
    return { isMenuCollapse, changeMenuCollapse }
  },
  { persist: true },
)
