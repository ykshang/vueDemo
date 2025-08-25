<template>
  <el-config-provider namespace="ep">
    <layout-side />
    <div class="main-container flex flex-1 flex-col overflow-hidden bg-[--ep-bg-color-page]">
      <layout-header />
      <RouterView />
    </div>
  </el-config-provider>
</template>
