<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ route.query.aa }}</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  console.log(route.query)
})
</script>
<style></style>
