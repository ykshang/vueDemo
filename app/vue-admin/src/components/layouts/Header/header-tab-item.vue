<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mx-5px flex items-center border-1px border-solid px-8px py-5px font-size-14px">
    <div class="flex items-center line-height-10px">
      {{ label }}
    </div>
    <div i-ep-close />
  </div>
</template>

<style scoped lang="scss">
</style>
