<template>
  <el-config-provider namespace="ep">
    <BaseSide />
    <div class="main-container flex flex-1 flex-col">
      <BaseHeader />
      <RouterView />
    </div>
  </el-config-provider>
</template>
