<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useRouterStore } from '~/stores/routerStroe'

const route = useRoute()
const routerStore = useRouterStore()
watch(
  () => route.path,
  (newPath) => {
    routerStore.push(newPath)
  },
  { immediate: true },
)
onMounted(() => {
  routerStore.push('/Home/HomePage')
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
