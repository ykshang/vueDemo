<template>
  <div>
    <el-button type="primary" @click="jump">跳转到 About</el-button>
    {{ id }}
    <div>{{ counterStore.count }}</div>
  </div>
</template>
<script setup lang="ts">
import { onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useCounterStore } from '@/stores/counter'
const props = defineProps(['id'])

const route = useRoute()
const router = useRouter()
const counterStore = useCounterStore()

onMounted(() => {
  console.log(route)
  console.log('props', props)
})

function jump() {
  // router.push('/about?aa=1')
  router.push({
    name: 'about',
    query: {
      id: 11223344,
    },
  })
}
</script>
