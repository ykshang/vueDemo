<template>
  <div>
    <el-button type="primary" @click="jump">跳转到 news</el-button>
    <!-- <el-button type="primary" @click="counterStore.increment()"> +1 </el-button> -->
    <div>{{ count }}</div>
    <div>{{ doubleCount }}</div>
    <!-- <el-button type="primary" @click="countStore.incrementCount"> count +1 </el-button> -->
    <!-- <div>{{ countStore.count }}</div> -->
    <div>{{ userInfoStore.name }}</div>
    <div>{{ userInfoStore.age }}</div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
// import { useCountStore } from '@/stores/count'
import { useUserInfoStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { toRefs } from 'vue'

const counterStore = useCounterStore()
// const countStore = useCountStore()
const userInfoStore = useUserInfoStore()
const { count, doubleCount } = storeToRefs(counterStore)
console.log('toRefs', toRefs(counterStore))
console.log('storeToRefs', storeToRefs(counterStore))
// console.log('countStore', countStore)

const router = useRouter()
function jump() {
  // router.push('/news/1122333')
  router.push({
    name: 'news',
    params: {
      id: 112233,
    },
  })
}
</script>
