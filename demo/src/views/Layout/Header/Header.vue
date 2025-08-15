<template>
  <el-header class="header">
    <TogglerTheme></TogglerTheme>
  </el-header>
</template>

<script setup lang="ts">
import TogglerTheme from './TogglerTheme/TogglerTheme.vue'
defineOptions({
  name: 'HeaderLayout',
})
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbcae0
}
</style>
