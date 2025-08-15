<template>
  <el-header class="header">
    <div class="flex-1">1</div>
    <TogglerTheme></TogglerTheme>
    <UserAvatar></UserAvatar>
  </el-header>
</template>

<script setup lang="ts">
import TogglerTheme from './TogglerTheme/TogglerTheme.vue'
import UserAvatar from './UserAvatar/Index.vue'
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
