<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch } from 'vue'
import { useRouterStore } from '~/stores/routerStroe'
import menuData from './menu-data'

const routerStore = useRouterStore()

const { currentRouterPath } = storeToRefs(routerStore)
const isCollapse = ref(false)
// 点击菜单时路由跳转
function handleMenuSelect(path: string) {
  // 防止菜单重复跳转
  if (currentRouterPath.value !== path) {
    routerStore.push(path)
  }
}
// 默认选中的菜单
const defaultActive = ref('')
// 监听路由变化，修改当前激活的菜单项
watch(
  () => currentRouterPath.value,
  (newPath) => {
    if (defaultActive.value !== newPath) {
      defaultActive.value = newPath
    }
  },
  { immediate: true },
)
onMounted(() => {
  if (defaultActive.value !== currentRouterPath.value) {
    defaultActive.value = currentRouterPath.value
  }
})
</script>

<template>
  <div h="full" w-250px flex flex-col>
    <div h-60px flex items-center justify-center>
      <IconVue mr-10px h-a w-35px />
      <span v-show="!isCollapse" class="text-2xl font-bold">Vue Admin</span>
    </div>
    <el-menu class="flex-1" :default-active="defaultActive" :collapse="isCollapse" @select="handleMenuSelect">
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
