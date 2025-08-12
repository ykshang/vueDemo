<template>
  <div class="parent">
    <div>
      <div>父组件</div>
      <div>a：{{ a }}</div>
      <div>b：{{ b }}</div>
      <div>c：{{ c }}</div>
      <div>d：{{ d }}</div>
    </div>
    <Child :a="a" :b="b" :c="c" :d="d"></Child>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import Child from './Child.vue'
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Parent',
})

const a = ref('a')
const b = ref('b')
const c = ref('c')
const d = ref('d')
</script>
<style scoped>
.parent {
  display: flex;
  width: 50vw;
  margin: auto;
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
}
</style>
