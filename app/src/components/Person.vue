<template>
  <div class="person">
    <div>姓名：{{ name }}</div>
    <div>年龄：{{ age }}</div>
    <div>电话：{{ tel }}</div>
    <button @click="showtel">查看电话</button>
  </div>
</template>
<script lang="ts">
export default {
  name: 'Person',
  data() {
    return {
      name: 'zhangsan',
      age: '12',
      tel: '121241241241',
    }
  },
  methods: {
    showtel() {
      alert(this.tel)
    },
  },
}
</script>
<style scoped></style>
