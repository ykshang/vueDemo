<template>
  <div class="login_container">
    <el-row class="flex-1">
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="login_col">
        <el-form class="login_form" :model="form" ref="formRef">
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="form.username" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" v-model="form.password" placeholder="密码" type="password"></el-input>
          </el-form-item>
          <div class="flex flex-center mt-30">
            <el-button class="mlr-10" type="primary" @click="handleSubmit">登录</el-button>
            <el-button class="mlr-10" type="primary" @click="handleRegister">注册</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" setup>
import { reactive } from 'vue'
import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
const router = useRouter();

defineOptions({
  name: 'LoginView',
})

const form = reactive({
  username: '',
  password: '',
})
const handleSubmit = async () => {
  router.push('/')
};
const handleRegister = async () => { };

</script>
<style lang="scss" scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  background: url('@/assets/images/background.jpg') no-repeat;
  background-size: cover;
  display: flex;

  .login_col {
    display: flex;
    justify-content: center;
    align-items: center;

    .login_form {
      width: 300px;
      margin: auto;
      background-color: var(--el-color-primary-dark-2);
      padding: 40px;
      border-radius: 10px;
    }
  }
}
</style>
