<template>
  <div class="container">
    <div>
      <button @click="jumpTo('/About')">About</button>
      <button @click="jumpTo('/Home')">Home</button>
      <button @click="jumpTo('/News')">News</button>
    </div>
    <br />
    <router-view></router-view>
  </div>
</template>
<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'

import { defineOptions } from 'vue'
const router = useRouter()
const route = useRoute()
defineOptions({ name: 'App' })
function jumpTo(params: string) {
  console.log(params)
  router.push(params)
  console.log(route)
}
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
