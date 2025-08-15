<template>
  <el-switch ref="switchRef" v-model="darkMode" :before-change="beforeChange">
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
import type { SwitchInstance } from 'element-plus'
import DarkIcon from './Dark.vue'
import LightIcon from './Light.vue'
import { ref, watch, nextTick } from 'vue'
defineOptions({
  name: 'TogglerTheme',
})
const switchRef = ref<SwitchInstance>()

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
const beforeChange = () => {
  return new Promise<boolean>((resolve) => {
    const isAppearanceTransition =
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      document.startViewTransition &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!isAppearanceTransition) {
      resolve(true)
      return
    }

    const switchElement = switchRef.value?.$el
    const rect = switchElement.getBoundingClientRect()
    const x = rect.left + rect.width / 2
    const y = rect.top + rect.height / 2

    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )

    const ratioX = (100 * x) / innerWidth
    const ratioY = (100 * y) / innerHeight
    const referR = Math.hypot(innerWidth, innerHeight) / Math.SQRT2
    const ratioR = (100 * endRadius) / referR
    const transition = document.startViewTransition(async () => {
      resolve(true)
      await nextTick()
    })
    transition.ready.then(() => {
      const clipPath = [
        `circle(0% at ${ratioX}% ${ratioY}%)`,
        `circle(${ratioR}% at ${ratioX}% ${ratioY}%)`,
      ]
      document.documentElement.animate(
        {
          clipPath: isDark.value ? [...clipPath].reverse() : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        }
      )
    })
  })
}
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
