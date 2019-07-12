<template>
  <div class="hello">
    <el-form :model="loginForm" :inline="true" :rules="rules" ref="loginForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="loginForm.username" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="alert('submit')">提交</el-button>
        <el-button @click="alert('reset')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      loginForm: {
        username: '',
        password: ''
      },
      rules: {
        username: [],
        password: []
      }
    };
  },
  methods: {
    alert (val) {
      this.$message({
        message: val,
        center: true
      });
    }
  }
};
</script>

<style scoped>
</style>
