<template>
  <div class="person">
    <h1 ref="title1">尚硅谷</h1>
    <h2 ref="title2">前端</h2>
    <h3 ref="title3">Vue</h3>
    <button @click="viewRef">查看 ref</button>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineOptions } from 'vue'
// eslint-disable-next-line vue/multi-word-component-names
defineOptions({ name: 'person' })
const title1 = ref()
const title2 = ref()
const title3 = ref()
// 通过ref获取元素
function viewRef() {
  console.log(title1.value)
  console.log(title2.value)
  console.log(title3.value)
}
</script>
