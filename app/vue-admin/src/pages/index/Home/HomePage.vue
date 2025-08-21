<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
onMounted(() => {
  // eslint-disable-next-line no-console
  console.log(route)
})
</script>

<template>
  <div>HomePage</div>
</template>
