<template>
  <div class="ml-10">
    <el-dropdown>
      <span class="el-dropdown-link">
        用户名
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <span @click="loginout">个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="loginout">切换主题</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span @click="loginout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
<script setup lang="ts">
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router';
defineOptions({
  name: 'UserAvatar',
})
const router = useRouter();
const loginout = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
}
</style>
