import { defineStore } from 'pinia'

export const useCountStore = defineStore('counter', {
  // State 定义
  state: () => ({
    count: 0,
  }),

  // Getter 定义
  getters: {
    doubleCount: (state) => state.count * 2,
  },

  // Action 定义
  actions: {
    incrementCount() {
      this.count++
    },
    decrementCount() {
      this.count--
    },
  },
})
