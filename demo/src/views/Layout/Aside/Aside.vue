<template>
  <div class="aside">
    <div class="title">
      <IconVue class="icon" />
      Vue Admin
    </div>
    <MenuLayout></MenuLayout>
  </div>
</template>

<script setup lang="ts">
import { IconVue } from '@/components/icons'
import MenuLayout from '@/views/Layout/Menu/Menu.vue'

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
    display: flex;
    justify-items: center;
    align-items: center;

    .icon {
      width: 30px;
      height: auto;
      margin-right: 5px;
    }
  }

  .menu {
    flex: 1;
  }
}
</style>
