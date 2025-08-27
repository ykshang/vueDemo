<script setup>
import { ref } from 'vue'

const list = ref([1, 2, 3])

function handlePush() {
  list.value.push(4) // 响应式更新
}

function handleFilter() {
  list.value = list.value.filter(v => v > 2) // 需重新赋值
}
</script>

<template>
  <button @click="handlePush">
    添加元素
  </button>
  <button @click="handleFilter">
    过滤元素
  </button>
  <ul>
    <li v-for="item in list" :key="item">
      {{ item }}
    </li>
  </ul>
</template>
