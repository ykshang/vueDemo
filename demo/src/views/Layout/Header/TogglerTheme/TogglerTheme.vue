<template>
  <el-switch v-model="darkMode">
    <template #active-action>
      <DarkIcon />
    </template>
    <template #inactive-action>
      <LightIcon />
    </template>
  </el-switch>
</template>
<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'
import DarkIcon from './Dark.vue'
import LightIcon from './Light.vue'
import { ref, watch } from 'vue'
defineOptions({
  name: 'TogglerTheme',
})

const darkMode = ref(isDark.value)
watch(
  () => isDark.value,
  (newVal) => {
    darkMode.value = newVal
  }
)

watch(
  () => darkMode.value,
  (newVal) => {
    if (newVal !== isDark.value) {
      toggleDark()
    }
  }
)
</script>
<style lang="scss" scoped>
:deep(.el-switch__core) {
  --el-switch-on-color: var(--bg-color-mute);
  --el-switch-off-color: var(--bg-color-mute);
  --el-switch-border-color: var(--border-color);

  .el-switch__action {
    width: 14px;
    height: 14px;
  }
}

:deep(.el-switch.is-checked .el-el-switch__core) {
  background-color: #2c2c2c !important;
  border-color: #4c4d4f;
  color: red !important;
}

:deep(.dark-icon) {
  border-radius: 50%;
  color: #cfd3dc;
  background-color: #141414;
}

:deep(.light-icon) {
  color: #606266;
}
</style>
