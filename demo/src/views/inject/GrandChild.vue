<template>
  <div class="grand-child">
    <h3>我是孙组件</h3>
    <h4>资产：{{ money }}</h4>
    <h4>汽车：{{ car }}</h4>
    <el-button @click="updateMoney(6)">点我 +6</el-button>
  </div>
</template>

<script setup lang="ts">
defineOptions({
  name: 'GrandChild',
})
import { inject } from 'vue'
// 注入数据
const { money, updateMoney } = inject('moneyContext', {
  money: 0,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateMoney: (x: number): void => {},
})
const car = inject('car')
</script>
