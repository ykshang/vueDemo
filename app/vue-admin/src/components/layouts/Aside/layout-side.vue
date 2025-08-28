<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useThemeConfigStore } from '~/stores/useThemeStroe'
import { menuDataTree } from './menu-data'

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
  <div h="full" class="b-r-[--ep-border-color]" w-min flex flex-col b-r-1px b-r-solid>
    <div h-60px flex items-center justify-center>
      <IconVue mr-10px h-a w-35px />
      <span v-show="!isMenuCollapse" class="text-2xl font-bold">Vue Admin</span>
    </div>
    <el-menu
      w-280px flex-1 overflow-y-auto :default-active="defaultActive" :collapse="isMenuCollapse" :collapse-transition="false"
      @select="handleMenuSelect"
    >
      <el-sub-menu v-for="menu1 in menuDataTree" :key="menu1.path" :index="menu1.path">
        <template #title>
          <component :is="menu1.icon" mr-8px h-a w-18px />
          <span font-size-14px>{{ menu1.title }}</span>
        </template>
        <el-menu-item v-for="menu2 in menu1.subMenu" :key="menu2.path" :index="menu2.path">
          <component :is="menu2.icon" mr-8px h-a w-18px />
          <span font-size-14px>{{ menu2.title }}</span>
        </el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.ep-menu-item.is-active {
  background-color: var(--ep-menu-hover-bg-color);
}

::v-deep(.ep-menu) {
  border: none !important;
}
</style>
