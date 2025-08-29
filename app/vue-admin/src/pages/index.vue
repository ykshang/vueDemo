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
      <!-- 把属性挪到外层，修复一些 Vue 警告信息 -->
      <div class="flex-1 overflow-x-hidden overflow-y-auto bg-[--ep-bg-color-page] p-20px">
        <router-view :key="refreshKey" />
      </div>
    </div>
  </el-config-provider>
</template>
