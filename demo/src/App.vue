<template>
  <div class="common-layout">
    <el-container>
      <el-header class="">
        <el-button
          type="primary"
          v-for="button in buttonList"
          :key="button.id"
          @click="toView(button.path)"
          >{{ button.name }}</el-button
        >
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'
const buttonList = reactive([
  { id: 1, name: 'home', path: '/' },
  { id: 1, name: 'about', path: '/about' },
  { id: 2, name: 'news', path: '/news' },
])
const router = useRouter();
function toView(path: string) {
  router.push(path);
}
</script>

<style lang="scss" scoped>
.common-layout {
  width: 100vw;
  height: 100vh;
  display: flex;
}
.common-layout .el-header,
.common-layout .el-footer {
  background-color: var(--el-color-primary-light-7);
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.common-layout .el-main {
  background-color: var(--el-color-primary-light-9);
  color: var(--el-text-color-primary);
  text-align: center;
  flex: 1;
}
</style>
