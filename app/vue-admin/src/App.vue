<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouterStore } from '~/stores/routerStroe'

const routerStore = useRouterStore()
onMounted(() => {
  routerStore.push('/Setting/Profile')
})
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  text-align: center;
  color: var(--ep-text-color-primary);
  display: flex;
  height: 100vh;
  overflow: hidden;
}
</style>
