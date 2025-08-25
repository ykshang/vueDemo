<template>
  <el-config-provider namespace="ep">
    <BaseSide />
    <div class="main-container flex flex-1 flex-col overflow-hidden bg-[--ep-bg-color-page]">
      <BaseHeader />
      <RouterView />
    </div>
  </el-config-provider>
</template>
