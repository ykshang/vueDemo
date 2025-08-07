<template>
  <person ref="ren"></person>
  <button @click="viewRen">查看 ren</button>
</template>
<script lang="ts" setup>
// import { RouterLink, RouterView } from 'vue-router'
import { defineOptions, ref } from 'vue'
import Person from './components/Person.vue'
defineOptions({ name: 'App' })
const ren = ref()
function viewRen() {
  console.log(ren.value)
}
</script>

<style scoped></style>
