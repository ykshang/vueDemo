<template>
  <div class="layout">
    <el-container>
      <el-header>1</el-header>
      <!-- <el-header class="">
        <el-button
          type="primary"
          v-for="button in buttonList"
          :key="button.id"
          @click="toView(button.path)"
        >
          {{ button.name }}
        </el-button>
      </el-header> -->
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
  { id: 2, name: 'about', path: '/about' },
  { id: 3, name: 'news', path: '/news' },
  { id: 4, name: 'attr', path: '/AttrView' },
  { id: 5, name: 'refs', path: '/refs' },
  { id: 6, name: 'inject', path: '/inject' },
])
const router = useRouter()
function toView(path: string) {
  router.push(path)
}
</script>

<style lang="scss" scoped>
.layout {
  width: 100vw;
  height: 100vh;
  display: flex;
  .el-header {
    border-bottom: 1px solid #dbcae0
  }
}
</style>
