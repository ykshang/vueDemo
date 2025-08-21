<script setup lang="ts">
import { onMounted, ref } from 'vue'

const mainTitle = ref('，欢迎来到 Vue Admin')
const subTitle = ref('这是一个基于 Vue 3 的后台管理系统')
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
  mainTitle.value = title + mainTitle.value
})
</script>

<template>
  <el-card m-20px>
    <div mb-10px mt-5px flex justify-center>
      <IconAvatar h-60px w-a />
      <div ml-20px flex flex-1 flex-col items-start>
        <div font-size-18px font-bold>
          {{ mainTitle }}
        </div>
        <div mt-15px font-size-14px>
          {{ subTitle }}
        </div>
      </div>
    </div>
  </el-card>
  <div item-center h-300px w-300px flex bg-red>
    1122
  </div>
</template>
