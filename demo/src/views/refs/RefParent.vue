<template>
  <div class="RefParent">
    <div class="flex_1">
      <el-text tag="b" size="large">父组件</el-text>
      <br />
      <br />
      <div>parent: {{ parent }}</div>
      <div>child: {{ childVal }}</div>
      <br />
      <el-button type="primary" @click="viewRen">获取子数据</el-button>
    </div>
    <RefChild ref="child"></RefChild>
  </div>
</template>
<script lang="ts" setup>
import { defineOptions, ref, useTemplateRef } from 'vue'
import RefChild from './RefChild.vue'
defineOptions({ name: 'RefParent' })
const childRef = useTemplateRef('child')
const childVal = ref<string>('')
const parent = ref('hello parent！')
function viewRen() {
  console.log(childRef.value?.child)
  childVal.value = childRef.value?.child as string
}
defineExpose({
  parent, viewRen
})
</script>
<style scoped>
.RefParent {
  display: flex;
  border: 2px dashed var(--el-color-primary);
  padding: 20px;
  max-width: 1000px;
  margin: auto;
}
</style>
