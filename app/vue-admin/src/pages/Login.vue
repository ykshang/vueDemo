<script lang="ts" setup>
import { Lock, User } from '@element-plus/icons-vue'
import { ElNotification } from 'element-plus'
import { nextTick, reactive, ref } from 'vue'
import { useRouter } from 'vue-router'
import { login } from '~/composables/services/loginService'

const router = useRouter()
const showRegisterFlg = ref(false)
const formData = reactive({
  userName: '',
  password: '',
})
function clickLogin() {
  login(formData).then((res: any) => {
    if (res?.status === 'success') {
      ElNotification.success({
        title: '通知',
        message: '登录成功',
      })
      router.push('/Home/HomePage')
    } else {
      ElNotification.error({
        title: '通知',
        message: '用户名或密码错误',
      })
    }
  })
}

const registerRef = ref()

function onOpenRegister() {
  showRegisterFlg.value = true
  nextTick(() => {
    registerRef.value.handleOpen()
  })
}
function onCloseRegister() {
  showRegisterFlg.value = false
}
</script>

<template>
  <el-config-provider namespace="ep">
    <div class="login_container">
      <div class="login-form">
        <el-form class="login_form" :model="formData" size="large">
          <div class="mb-40px mt-10px flex-1 text-3xl text-white color-[#FFF] font-bold">
            ERP智慧管理系统
          </div>
          <el-form-item prop="username">
            <el-input v-model="formData.userName" :prefix-icon="User" placeholder="用户名" />
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formData.password" :prefix-icon="Lock" placeholder="密码" show-password type="password" />
          </el-form-item>
          <div class="flex items-center justify-center">
            <el-button class="ml-10px mr-10px" type="primary" @click="clickLogin">
              登录
            </el-button>
            <el-button class="ml-10px mr-10px" type="primary" @click="onOpenRegister">
              注册
            </el-button>
          </div>
        </el-form>
      </div>
    </div>
    <user-register v-if="showRegisterFlg" ref="registerRef" @close="onCloseRegister" />
  </el-config-provider>
</template>

<style lang="scss" scoped>
.login_container {
  width: 100vw;
  height: 100vh;
  background: url('~/assets/images/background.jpg') no-repeat;
  background-size: cover;

  .login-form {
    width: 18vw;
    padding: 30px 40px;
    border-radius: 10px;
    position: fixed;
    right: 20vh;
    top: 50%;
    transform: translateY(-60%);
    background: linear-gradient(
      135deg,
      #016cb4,
      #0165c8,
      #038deac4,
      #0165c8,
      #016cb4,
      #0165c8,
      #038deac4,
      #0165c8,
      #016cb4
    );
    background-size: 200% 200%;
    animation: gradient-bg 20s linear infinite;

    @keyframes gradient-bg {
      0% {
        background-position: 0% 0%;
      }

      100% {
        background-position: 100% 100%;
      }
    }

    ::v-deep(.ep-input__wrapper) {
      background-color: #fff;
      box-shadow: 0 0 0 1px #dcdfe6;
      color: #303133;
    }

    ::v-deep(.ep-button) {
      &:hover {
        color: #fff;
        border-color: rgb(123, 205, 231);
        background-color: rgb(123, 205, 231);
      }
    }

    ::v-deep(.ep-input__prefix) {
      color: #cfd3dc;
    }

    ::v-deep(.ep-input__inner) {
      color: #303133;
    }
  }
}
</style>
