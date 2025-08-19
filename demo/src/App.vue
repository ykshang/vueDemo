<template>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'

defineOptions({
  name: 'AppView',
})
</script>

<style lang="scss" scoped>
.app {
  background: #f0f0f0;
}
</style>
