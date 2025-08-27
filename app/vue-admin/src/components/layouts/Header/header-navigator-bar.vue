<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { menuDataTree } from '../Aside/menu-data'

const route = useRoute()

const navitemList = computed(() => {
  const routeList = route.matched.slice(1) || []
  const result: any[] = []
  let menuList = menuDataTree
  while (routeList.length > 0) {
    const route = routeList.shift()
    const menu = menuList.find((menu) => {
      return menu.index === route?.path
    })
    result.push(menu)
    menuList = menu?.subMenu as any
  }
  return result
})
</script>

<template>
  <el-breadcrumb class="ml-20px" separator=">">
    <el-breadcrumb-item v-for="nav in navitemList" :key="nav?.path">
      <div class="flex cursor-pointer items-center justify-center">
        <component :is="nav.icon" class="h-16px w-16px" />
        <div class="ml-3px font-size-14px">
          {{ nav?.title }}
        </div>
      </div>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style scoped lang="scss"></style>
