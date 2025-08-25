<template>
  <el-config-provider namespace="ep">
    <LayoutSide />
    <div class="main-container flex flex-1 flex-col overflow-hidden bg-[--ep-bg-color-page]">
      <LayoutHeader />
      <RouterView />
    </div>
  </el-config-provider>
</template>
