import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserInfoStore = defineStore('userInfo', () => {
  const name = ref('kangkang')
  const age = ref(18)
  function changeName() {
    name.value += '6'
  }

  return { name, age, changeName }
})
