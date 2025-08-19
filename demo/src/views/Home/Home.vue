<template>
  <el-container class="layout">
    <AsideLayout class="aside"></AsideLayout>
    <el-main class="main">
      <HeaderLayout class="header"></HeaderLayout>
      <el-header class="">
        <el-button type="primary" v-for="button in buttonList" :key="button.id" @click="toView(button.path)">
          {{ button.name }}
        </el-button>
      </el-header>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">
import HeaderLayout from '@/views/Layout/Header/Header.vue'
import AsideLayout from '@/views/Layout/Aside/Aside.vue'
import { onMounted, reactive } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import axios from '@/util/axios';

defineOptions({
  name: 'AppView',
})
const buttonList = reactive([
  { id: 1, name: 'home', path: '/' },
  { id: 2, name: 'about', path: '/about' },
  { id: 4, name: 'attr', path: '/AttrView' },
  { id: 5, name: 'refs', path: '/refs' },
  { id: 6, name: 'inject', path: '/inject' },
])
const router = useRouter()
function toView(path: string) {
  router.push(path)
}
onMounted(async () => {
  // 登录
  axios.get('/api/user/userList').then((res) => {
    console.log(res)
  })
})
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;

  .aside {
    height: 100vh;
    width: 300px;
    border: 1px solid #dbcae0;
    background-color: #fff;
  }

  .main {
    padding: 0;

    .header {
      background: #fff;
    }
  }
}
</style>
