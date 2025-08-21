<template>
  <el-container>
    <el-aside class="aside">
      <AsideLayout></AsideLayout>
    </el-aside>
    <el-container>
      <el-header class="header">
        <HeaderLayout></HeaderLayout>
      </el-header>
      <el-main class="main">
        <MainLayout></MainLayout>
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import HeaderLayout from './Header/Header.vue'
import AsideLayout from './Aside/Aside.vue'
import MainLayout from './Main/Main.vue'
import { onMounted } from 'vue'
import axios from '@/util/axios';

defineOptions({
  name: 'AppView',
})
onMounted(async () => {
  // 登录
  axios.get('/api/user/userList').then((res) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
.aside {
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  width: min-content;
  margin-right: 1px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
}
.header {
  background: #fff;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}
.main {
  padding: 0;
}
</style>
