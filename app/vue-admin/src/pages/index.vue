<script lang="ts" setup>
import { ref } from 'vue'
import emitter from '~/composables/util/emitter'

const refreshKey = ref(0)

emitter.on('refreshPage', () => {
  refreshKey.value++
})
</script>

<template>
  <el-config-provider namespace="ep">
    <layout-side />
    <div class="main-container flex flex-1 flex-col overflow-hidden bg-[--ep-bg-color-page]">
      <layout-header />
      <router-view :key="refreshKey" />
    </div>
  </el-config-provider>
</template>
