<template>
  <div class="RefChild">
    <el-text tag="b" size="large">子组件</el-text>
    <br />
    <br />
    <div>child：{{ child }}</div>
    <div>parent: {{ parentVal }}</div>
    <br />
    <el-button type="primary" @click="getParent">获取父数据</el-button>
  </div>
</template>
<script lang="ts" setup>
import { ref, defineExpose, getCurrentInstance } from "vue";
defineOptions({ name: "RefChild" });
const instance = getCurrentInstance();
const child = ref("hello child");
const parentVal = ref("");
//  主动对外暴露 age 和 name
function getParent() {
// oxlint-disable-next-line no-unsafe-optional-chaining
console.log(instance?.parent);
  // parentVal.value = (1 as any).setupState?.parent as string; // 获取父组件实例
}
defineExpose({ child });
</script>
<style scoped>
.RefChild {
  flex: 1;
}
</style>
