<template>
  <div class="user">
    <IconAvatar class="user_avatar" />
    <el-dropdown>
      <span class="el-dropdown-link">
        <span class="username">
          用户名
          <el-icon class="">
            <arrow-down />
          </el-icon>
        </span>
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
import { useRouter } from 'vue-router'
import { IconAvatar } from '@/components/icons'
defineOptions({
  name: 'UserAvatar',
})
const router = useRouter()
const loginout = () => {
  router.push('/login')
}
</script>
<style lang="scss" scoped>
.user {
  display: flex;
  justify-content: center;
  align-items: center;

  .user_avatar {
    height: 36px;
    width: auto;
    margin-right: 10px;
  }

  .el-dropdown-link {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-right: 10px;

    // color: #fff;
    .username {
      font-size: 14px;

      &:hover {
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
