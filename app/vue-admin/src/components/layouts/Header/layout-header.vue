<script lang="ts" setup>
</script>

<template>
  <div class="h-60px flex items-center b-b-1px b-b-color-[--ep-menu-border-color] b-b-solid bg-[--ep-bg-color]">
    <MenuCollapseButton />
    <NavigatorBar />
    <div flex-1>
      {{ '' }}
    </div>
    <HeaderToolBar />
    <UserOperationBar />
  </div>
  <div class="h-50px flex items-center b-b-1px b-b-color-[--ep-menu-border-color] b-b-solid bg-[--ep-bg-color]">
    <HeaderTabs />
  </div>
</template>
