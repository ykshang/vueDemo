import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserInfoStore = defineStore('UserInfo', () => {
  const name = ref('kangkang')
  const age = ref(18)
  function changeName() {
    name.value += '6'
  }

  return { name, age, changeName }
})
