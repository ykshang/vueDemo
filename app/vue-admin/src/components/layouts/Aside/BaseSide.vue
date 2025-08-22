<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeConfigStore } from '~/stores/useThemeStroe'
import menuData from './menu-data'

const route = useRoute()
const router = useRouter()

// 点击菜单时路由跳转
function handleMenuSelect(path: string) {
  // 防止菜单重复跳转
  if (route.path !== path) {
    router.push(path)
  }
}
// 使用计算属性代替 watch 和 onMounted 来实时获取当前应该显示的菜单
const defaultActive = computed(() => {
  return route.path
})

// 用于菜单的展开和关闭
const themeConfigStore = useThemeConfigStore()
const { isMenuCollapse } = storeToRefs(themeConfigStore)
</script>

<template>
  <div h="full" w-min flex flex-col>
    <div h-60px flex items-center justify-center>
      <IconVue mr-10px h-a w-35px />
      <span v-show="!isMenuCollapse" class="text-2xl font-bold">Vue Admin</span>
    </div>
    <el-menu w-280px flex-1 transition-1000 :default-active="defaultActive" :collapse="isMenuCollapse" :collapse-transition="false" @select="handleMenuSelect">
      <el-sub-menu v-for="menu1 in menuData" :key="menu1.index" :index="menu1.index">
        <template #title>
          <component :is="menu1.icon" class="menu_icon" />
          <span class="menu_title">{{ menu1.title }}</span>
        </template>
        <el-menu-item v-for="menu2 in menu1.subMenu" :key="menu2.index" :index="menu2.index">
          <component :is="menu2.icon" class="menu_icon" />
          <span class="menu_title w-40 text-align-left">{{ menu2.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.menu_icon {
  width: 18px;
  height: auto;
  margin-right: 5px;
}

.menu_title {
  font-size: 16px;
  font-weight: 400;
}

.ep-menu-item.is-active {
  background-color: var(--ep-menu-hover-bg-color);
}
</style>
