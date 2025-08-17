<template>
  <div class="GrandChild">
    <div>孙组件</div>
    <div>{{ $attrs }}</div>
  </div>
</template>
<script setup lang="ts">
defineOptions({
  name: 'GrandChild',
})
</script>
<style scoped>
.GrandChild {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
  flex: 1;
}
</style>
