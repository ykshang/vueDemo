<script lang="ts" setup>
import NProgress from 'nprogress'
import { ref } from 'vue'
import emitter from '~/config/emitter'

const refreshKey = ref(0)

emitter.on('refreshPage', () => {
  NProgress.start() // 手动启动进度条
  refreshKey.value++
  NProgress.done() // 手动完成进度条
})
</script>

<template>
  <el-config-provider namespace="ep">
    <layout-side />
    <div class="main-container flex flex-1 flex-col overflow-hidden bg-[--ep-bg-color-page]">
      <layout-header />
      <router-view :key="refreshKey" overflow-y-auto />
    </div>
  </el-config-provider>
</template>
