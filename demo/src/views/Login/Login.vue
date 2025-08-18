<template>
  <div class="login_container">
    <el-row class="flex-1">
      <el-col :span="12" :xs="0"></el-col>
      <el-col :span="12" :xs="24" class="login_col">
        <el-form class="login_form" :model="formData" ref="formRef">
          <div class="form_subject">
            ERP智慧管理系统
          </div>
          <el-form-item prop="username">
            <el-input :prefix-icon="User" v-model="formData.userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input :prefix-icon="Lock" v-model="formData.password" placeholder="密码" show-password
              type="password"></el-input>
          </el-form-item>
          <div class="flex flex-center mt-30">
            <el-button class="mlr-10" type="primary" @click="handleSubmit">登录</el-button>
            <el-button class="mlr-10" type="primary" @click="onOpenRegister">注册</el-button>
          </div>
        </el-form>
      </el-col>
    </el-row>
  </div>
  <Register ref="registerRef" v-if="showRegisterFlg" @close="onCloseRegister"></Register>
</template>
<script lang="ts" setup>
import { ref, reactive, nextTick } from 'vue'
import { User, Lock } from '@element-plus/icons-vue';
import { useRouter } from 'vue-router';
import Register from '../Register/Register.vue';
import { login } from '@/services/user';
import { ElMessage } from 'element-plus';
const router = useRouter();
defineOptions({
  name: 'LoginView',
})

const formData = reactive({
  userName: '',
  password: '',
})

// 登录按钮
const handleSubmit = async () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  login(formData).then((res: any) => {
    console.log(res);
    if (res?.status === 'success') {
      ElMessage.success('登录成功')
      router.push('/')
    } else {
      ElMessage.error('用户名或密码错误');
    }
    // router.push('/')
  })
  // router.push('/')
};
// 注册用户-弹出框
const showRegisterFlg = ref(false);
const registerRef = ref();
const onOpenRegister = () => {
  showRegisterFlg.value = true;
  nextTick(() => {
    registerRef.value.handleOpen()
  })
};
const onCloseRegister = () => {
  console.log('dad关闭弹窗')
  showRegisterFlg.value = false;
}

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
      width: 20vw;
      margin: auto;
      background: linear-gradient(135deg, #016cb4, #0165c8, #038deac4, #0165c8, #016cb4, #0165c8, #038deac4, #0165c8, #016cb4);
      background-size: 200% 200%;
      animation: gradient-bg 20s linear infinite;
      /* 初始背景色 */
      /* 动画过渡 */
      padding: 40px;
      border-radius: 10px;

      @keyframes gradient-bg {
        0% {
          background-position: 0% 0%;
        }

        100% {
          background-position: 100% 100%;
        }
      }

      .form_subject {
        color: #f1f1f1;
        font-size: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
      }
    }
  }
}
</style>
