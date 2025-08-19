<template>
  <el-container>
    <el-aside class="aside">
      <AsideLayout></AsideLayout>
    </el-aside>
    <el-container>
      <el-header>
        <HeaderLayout class="header"></HeaderLayout>
      </el-header>
      <el-main>
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
}
</style>
