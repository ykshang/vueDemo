<script lang="ts" setup>
import { ref } from 'vue'

const tabList = ref([
  {
    label: '首页',
    path: '/',
  },
  {
    label: '列表',
    path: '/list',
  },
])
</script>

<template>
  <div class="flex items-center">
    <div v-for="item in tabList" :key="item.path">
      <header-tab-item :label="item.label" />
    </div>
  </div>
</template>

<style></style>
