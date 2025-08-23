<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'

import { useUserInfoStore } from '~/stores/userIfnoStroe'

const userInfoStore = useUserInfoStore()
const { currentUserInfo } = storeToRefs(userInfoStore)

const mainTitle = ref('')
const subTitle = ref('这是一个基于 Vue 3 + Element Plus + Pinia + UnoCSS 的后台管理系统')
const time = ref(new Date())
onMounted(() => {
  // eslint-disable-next-line prefer-const
  let hour = time.value.getHours()
  let title = ''
  if (hour <= 11) {
    title = '早上好'
  } else if (hour < 18) {
    title = '下午好'
  } else {
    title = '晚上好'
  }
  mainTitle.value = `${title}！${currentUserInfo.value.userName}，欢迎来到 Vue Admin`
})
</script>

<template>
  <el-card class="m-20px">
    <div class="mb-8px mt-5px flex justify-center">
      <el-avatar
        size="large"
        class="border-1px border-[--ep-color-primary] border-solid" shape="circle"
        :src="currentUserInfo.avatarUrl"
      />
      <div class="ml-20px flex flex-1 flex-col items-start">
        <div class="font-size-18px font-bold">
          {{ mainTitle }}
        </div>
        <div class="mt-12px font-size-14px">
          {{ subTitle }}
        </div>
      </div>
    </div>
  </el-card>
</template>
