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
  <div ml-10px flex>
    <div v-if="!isMenuCollapse" class="i-ri:menu-fold-2-line" @click="toggleMenuCollapse(true)" />
    <div v-else class="i-ri:menu-fold-line" @click="toggleMenuCollapse(false)" />
  </div>
</template>
