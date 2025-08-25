<script lang="ts" setup>
import { useFullscreen } from '@vueuse/core'

// 切换全屏
const target = document.getElementById('app') as HTMLElement
const { isFullscreen, toggle } = useFullscreen(target)
</script>

<template>
  <div mr-16px flex items-center justify-center>
    <div class="icons">
      <div i-ri-brush-3-line class="icon" />
    </div>
    <div class="icons">
      <el-badge :value="3" class="item">
        <div i-ep-bell class="icon" />
      </el-badge>
    </div>
    <div class="icons">
      <div v-if="!isFullscreen" class="i-ri:fullscreen-line icon" @click="toggle" />
      <div v-else class="i-ri:fullscreen-exit-fill icon" @click="toggle" />
    </div>
    <div class="icons">
      <el-dropdown trigger="hover">
        <div class="i-ri:translate-2 icon" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>中文简体</el-dropdown-item>
            <el-dropdown-item>English</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
    <div class="icons">
      <div i-ri-brush-3-line class="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  margin-right: 8px;
  margin-left: 7px;

  .icon {
    color: var(--ep-text-color-regular);
    font-size: 16px;
    font-weight: 400;

    &:hover {
      cursor: pointer;
      color: var(--ep-color-primary);
      animation: rubberBand 0.5s both;
    }
  }
}
</style>
