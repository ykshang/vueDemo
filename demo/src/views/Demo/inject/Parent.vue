<template>
  <div class="father">
    <el-card header="父组件">
      <h4>资产：{{ money }}</h4>
      <h4>汽车：{{ car }}</h4>
      <br />
      <el-button @click="money += 1">资产+1</el-button>
      <el-button @click="car.price += 1">汽车价格+1</el-button>
    </el-card>
    <Child />
  </div>
</template>

<script setup lang="ts" name="Father">
defineOptions({ name: 'ParentView' })
import Child from './Child.vue'
import { ref, reactive, provide } from 'vue'
// 数据
const money = ref(100)
const car = reactive({
  brand: '奔驰',
  price: 100,
})
// 用于更新money的方法
function updateMoney(value: number) {
  money.value += value
}
// 提供数据
provide('moneyContext', { money, updateMoney })
provide('car', car)
</script>
