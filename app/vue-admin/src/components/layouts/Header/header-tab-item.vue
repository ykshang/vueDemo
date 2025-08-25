<script setup lang="ts">
defineProps({
  label: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <div class="mx-2px flex items-center border-1px border-solid">
    <div class="fon-size-14px px-4 py-2 line-height-10px">
      {{ label }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
