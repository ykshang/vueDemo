import type { UserInfoStore } from '~/types/User'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore(
  'UserInfo',
  () => {
    const currentUserInfo = ref({
      userName: 'Kangkang Shang',
      age: '31',
      avatarUrl: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png',
    })
    const setCurrentUserInfo = (userInfo: UserInfoStore) => {
      Object.assign(currentUserInfo.value, userInfo)
    }
    return { currentUserInfo, setCurrentUserInfo }
  },
  { persist: true },
)
