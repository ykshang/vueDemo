<script setup lang="ts">
import { ElMessage, ElNotification } from 'element-plus'
import { ref, toRaw } from 'vue'
import { register } from '~/composables/services/userService'

const emit = defineEmits(['close'])
const loading = ref(false)
// 控制弹窗显示
const dialogVisible = ref(false)
// 初始化注册表单
const registerForm = ref({
  userName: '',
  password: '',
  email: '',
})
function handleRegister() {
  loading.value = true
  register(toRaw(registerForm.value)).then((res: any) => {
    loading.value = false
    if (res.data) {
      handleClose()
      ElNotification.success({
        title: '通知',
        message: '注册成功',
      })
    } else {
      ElMessage.error(res?.msg)
    }
  })
  // 注册成功后可关闭弹窗
}
function handleOpen() {
  // console.log('注册弹窗2233')
  dialogVisible.value = true
}
function handleClose() {
  dialogVisible.value = false
  // console.log('关闭弹窗')
  emit('close')
}
defineExpose({
  handleOpen,
  handleClose,
})
</script>

<template>
  <div class="register-dialog">
    <el-dialog v-model="dialogVisible" v-loading="loading" title="用户注册" width="600px" draggable @closed="handleClose">
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.userName" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="registerForm.password" type="password" :show-password="true" />
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.email" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="handleClose">取消</el-button>
          <el-button type="primary" @click="handleRegister">注册</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped></style>
