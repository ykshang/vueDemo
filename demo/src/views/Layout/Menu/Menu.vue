<template>
  <el-menu class="menu" default-active="2-1" @open="handleOpen" @close="handleClose">
    <el-sub-menu v-for="menu1 in menuData" :index="menu1.index" :key="menu1.index">
      <template #title>
        <component class="menu_icon" :is="menu1.icon"></component>
        <span class="menu_title">{{ menu1.title }}</span>
      </template>
      <el-menu-item v-for="menu2 in menu1.subMenu" :index="menu2.index" :key="menu2.index">
        <component class="menu_icon" :is="menu2.icon"></component>
        <span class="menu_title">{{ menu2.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script lang="ts" setup>
import menuData from './menu-data'
defineOptions({
  name: 'MenuLayout',
})

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>
.menu {
  flex: 1;

  .menu_icon {
    width: 16px;
    height: auto;
    margin-right: 5px;
  }

  ::deep(.el-sub-menu__title) {
    font-size: 20px;
  }
}
</style>
