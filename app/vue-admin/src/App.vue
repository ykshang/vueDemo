<script setup lang="ts">
import { onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
watch(
  () => route.path,
  (newPath) => {
    router.push(newPath)
  },
  { immediate: true },
)
onMounted(() => {
  forrbidenContextMenu()
  router.push('/Home/HomePage')
})
// 禁用右键菜单
function forrbidenContextMenu() {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault()
  })
}
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
  width: 100vw;
  overflow: hidden;
  background-color: var(--ep-bg-color);
}
</style>
