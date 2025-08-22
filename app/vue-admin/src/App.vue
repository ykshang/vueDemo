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
  router.push('/Home/HomePage')
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
