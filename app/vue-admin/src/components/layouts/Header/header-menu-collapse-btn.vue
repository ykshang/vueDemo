<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useThemeConfigStore } from '~/stores/useThemeStroe'

const themeConfigStore = useThemeConfigStore()

const { isMenuCollapse } = storeToRefs(themeConfigStore)

function toggleMenuCollapse(val: boolean) {
  themeConfigStore.changeMenuCollapse(val)
}
</script>

<template>
  <div ml-15px flex>
    <div
      class="MenuCollapseBtn" hover:color="$ep-color-primary" cursor-pointer
      @click="toggleMenuCollapse(!isMenuCollapse)"
    >
      <div v-if="!!isMenuCollapse" class="i-ri:menu-fold-2-line" />
      <div v-else class="i-ri:menu-fold-line" />
    </div>
  </div>
</template>
