<script lang="ts" setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'
import { toggleDark } from '~/composables/util'

const router = useRouter()

function loginout() {
  router.push('/Login')
}
</script>

<template>
  <div class="header h-60px bg-[--ep-bg-color]">
    <div flex-1>
      {{ '' }}
    </div>
    <div class="mr-15px flex items-center">
      <IconAvatar mr-10px h-30px w-30px />
      <el-dropdown>
        <span class="el-dropdown-link">
          <span class="username">
            用户名
            <el-icon>
              <ArrowDown />
            </el-icon>
          </span>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <span w-80px text-center>个人中心</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span w-80px text-center @click="toggleDark()">切换主题</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <span w-80px text-center @click="loginout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  display: flex;
  border-bottom: solid 1px var(--ep-menu-border-color);
  align-items: center;

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
