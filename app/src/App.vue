<template>
  <div class="container">
    <person ref="ren" :aaa="personList" bbb="111"></person>
    <!-- <button @click="viewRen">查看 ren</button> -->
  </div>
</template>
<script lang="ts" setup>
// import { RouterLink, RouterView } from 'vue-router'
import { defineOptions, ref, reactive } from 'vue'
import Person from './components/Person.vue'
import { type PersonList } from '@/types/index'

defineOptions({ name: 'App' })
const ren = ref()

const personList = reactive<PersonList>([
  { id: '1', age: 21, name: 'zhangsan' },
  { id: '2', age: 22, name: 'lisi' },
  { id: '3', age: 24, name: 'wangwu' },
])
// function viewRen() {
//   console.log(ren.value)
// }
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
