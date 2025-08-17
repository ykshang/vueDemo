<template>
  <RouterView></RouterView>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

defineOptions({
  name: 'AppView',
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}
</style>
