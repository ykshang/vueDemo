<template>
  <div class="person">
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>电话：{{ tel }}</div>
    <button @click="changeName()">修改姓名</button>
    <button @click="changeAge()">修改年龄</button>
    <button @click="showtel">查看电话</button>
  </div>
</template>
<script setup lang="ts" name="111">
import { defineOptions, ref } from 'vue'
// 设置组件名称
defineOptions({
  name: 'Person123',
})
// 数据
let name = ref('zhangsan')
let age = ref(12)
let tel = ref('12132131231231')
function changeName() {
  name.value = 'lisi'
}
function changeAge() {
  age.value += 1
}
function showtel() {
  alert(tel.value)
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
