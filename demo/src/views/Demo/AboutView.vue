<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ route.query.aa }}</div>
    <div>{{ xxxxxxx }}</div>
  </div>
</template>
<script lang="ts" setup>
import { onMounted, getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
onMounted(() => {
  console.log(route.query)
})
const ins = getCurrentInstance()
// oxlint-disable-next-line no-unsafe-optional-chaining
const { xxxxxxx } = ins?.appContext.config.globalProperties?.xxxxxxx;
</script>
<style></style>
