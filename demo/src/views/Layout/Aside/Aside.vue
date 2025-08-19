<template>
  <div class="aside">
    <div class="title">
      <IconVue class="icon" />
      Vue Admin
    </div>
    <div class="menu">1</div>
  </div>
</template>

<script setup lang="ts">
import { IconVue } from '@/components/icons'

defineOptions({
  name: 'AsideLayout',
})
</script>
<style lang="scss" scoped>
.aside {
  display: flex;
  flex-direction: column;
  .title {
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 20px;
    color: #333;
    display: flex;
    margin: auto;
    .icon {
      width: 24px;
      height: auto;
    }
  }
  .menu {
    flex: 1;
  }
}
</style>
