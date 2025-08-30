<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { menuDataList } from '../Aside/menu-data'

const route = useRoute()
const navitemList = ref<any[]>([])

watch(
  () => route.path,
  (newPath) => {
    // console.log(newPath)
    const result: any[] = []
    const targetMenu = menuDataList.find((item: any) => item.path === newPath)
    let menu = targetMenu
    while (menu) {
      result.push({
        icon: menu.icon,
        title: menu.title,
        path: menu.path,
      })
      menu = menu.parent
    }
    navitemList.value = result.reverse().slice(1)
  },
  { immediate: true, deep: true },
)
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
