<script lang="ts" setup>
</script>

<template>
  <div class="border-bottom h-60px min-h-60px flex items-center">
    <!-- 控制左侧菜单的展开和收起 -->
    <header-menu-collapse-btn />
    <!-- 导航栏 -->
    <header-navigator-bar />
    <div flex-1 />
    <!-- 头像左侧的工具条 -->
    <header-tool-bar />
    <!-- 头像和用户信息 -->
    <header-user-operation-bar />
  </div>
  <div class="border-bottom pos-relative h-50px min-h-50px">
    <!-- 标签页 -->
    <header-tabs />
  </div>
</template>

<style lang="scss" scoped>
.border-bottom {
  border-bottom: 1px solid var(--ep-menu-border-color);
  background-color: var(--ep-bg-color);
}
</style>
