<template>
  <div class="person">
    <div>{{ car.brand }} {{ car.price }}</div>
    <button @click="changePrice">修改价格</button>
  </div>
</template>
<script setup lang="ts" name="111">
import { defineOptions, reactive } from 'vue'
// 设置组件名称
defineOptions({
  name: 'Person123',
})
// 数据
let car = reactive({
  brand: '奔驰',
  price: 100,
})
function changePrice() {
  car.price += 1000;
}
</script>
<style lang="scss" scoped>
.person {
  border: 1px solid #ccc;
  padding: 20px;
}
button {
  margin: 10px;
}
</style>
