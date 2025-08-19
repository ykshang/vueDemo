<template>
  <div class="project_title">
    <IconVue class="icon" />
    <span v-show="!isCollapse">Vue Admin</span>
  </div>
  <el-menu class="main_menu" default-active="2-1" :collapse="isCollapse">
    <el-sub-menu v-for="menu1 in menuData" :index="menu1.index" :key="menu1.index">
      <template #title>
        <component class="menu_icon" :is="menu1.icon"></component>
        <span class="menu_title">{{ menu1.title }}</span>
      </template>
      <el-menu-item v-for="menu2 in menu1.subMenu" :index="menu2.index" @click="handleClick(menu2)" :key="menu2.index">
        <component class="menu_icon" :is="menu2.icon"></component>
        <span class="menu_title">{{ menu2.title }}</span>
      </el-menu-item>
    </el-sub-menu>
  </el-menu>
</template>

<script setup lang="ts">
import { IconVue } from '@/components/icons'
import { ref } from 'vue'
import emitter from '@/util/emitter'
import menuData from './menu-data'
import type { OperationMenuItem } from '@/types/menu'
defineOptions({
  name: 'AsideLayout',
})

function handleClick(menu2: OperationMenuItem) {
  console.log(menu2);
}
const isCollapse = ref(false);
// 监听菜单展开关闭事件
emitter.on("menu:expanded", (value) => {
  isCollapse.value = value as boolean;
});
</script>
<style lang="scss" scoped>
.project_title {
  height: 60px;
  line-height: 60px;
  font-size: 20px;
  color: #333;
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

.main_menu {
  flex: 1;
}

.menu_icon {
  width: 18px;
  height: auto;
  margin-right: 5px;
}

.menu_title {
  width: 200px;
}
</style>
