<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { toggleDark } from '~/config/toggleDarkTheme'
import { useUserInfoStore } from '~/stores/userIfnoStroe'

const router = useRouter()
// 跳转到个人中心
function openProfile() {
  router.push('/Setting/Profile')
}

// 退出登录
function loginout() {
  router.push('/Login/')
}

/**
 * 获取当前已登录的用户信息
 */
const userInfoStore = useUserInfoStore()
const { currentUserInfo } = storeToRefs(userInfoStore)

/**
 * 下拉菜单显示状态改变时触发
 */
const isVisible = ref(false)
function handleVisibleChange(visible: boolean) {
  isVisible.value = visible
}
/**
 * 头像加载失败的回退逻辑
 */
const showAvatarFlg = ref(true)
function errorHandler() {
  showAvatarFlg.value = false
}
</script>

<template>
  <div class="mr-15px flex items-center">
    <div class="mr-10px cursor-pointer">
      <el-avatar v-if="showAvatarFlg" class="border-1px border-[--ep-color-primary] border-solid" shape="circle" :src="currentUserInfo.avatarUrl" @error="errorHandler" />
      <el-avatar v-else>
        User
      </el-avatar>
    </div>
    <el-dropdown @visible-change="handleVisibleChange">
      <span
        class="mr-10px max-w-200px min-w-100px flex cursor-pointer items-center font-size-16px line-height-24px hover:color-[--ep-color-primary]"
      >
        <span class="overflow-hidden text-ellipsis whitespace-nowrap">{{ currentUserInfo.userName }}</span>
        <div class="ml-5px inline-block">
          <div v-if="!isVisible" class="i-ep:arrow-down" />
          <div v-else class="i-ep:arrow-up" />
        </div>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item>
            <span class="w-80px text-center" @click="openProfile">个人中心</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span class="w-80px text-center" @click="toggleDark()">切换主题</span>
          </el-dropdown-item>
          <el-dropdown-item>
            <span w-80px text-center @click="loginout">退出登录</span>
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
