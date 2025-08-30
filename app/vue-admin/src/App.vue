<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
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
