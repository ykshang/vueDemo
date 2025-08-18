<template>
  <div class="register-dialog">
    <el-dialog title="用户注册" v-loading="loading" v-model="dialogVisible" width="600px" @closed="handleClose" draggable>
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.userName"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="registerForm.password" :show-password="true"></el-input>
        </el-form-item>
        <el-form-item label="邮箱">
          <el-input v-model="registerForm.email"></el-input>
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

<script setup lang="ts">
import { ref, toRaw } from 'vue';
import type { RegisterForm } from '@/types/user';
import { register } from '@/services/user';
import { ElMessage } from 'element-plus';
defineOptions({
  name: 'RegisterView',
})
const loading = ref(false)
const emit = defineEmits(["close"]);
// 控制弹窗显示
const dialogVisible = ref(false);
// 初始化注册表单
const registerForm = ref<RegisterForm>({
  userName: '',
  password: '',
  email: ''
});
const handleRegister = () => {
  loading.value = true;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register(toRaw(registerForm.value)).then((res: any) => {
    loading.value = false;
    if (res?.code === 200) {
      handleClose()
      ElMessage.success('注册成功')
    } else {
      ElMessage.error(res?.result?.msg)
    }
  })
  // 注册成功后可关闭弹窗
};
console.log("注册弹窗2233")
const handleOpen = () => {
  dialogVisible.value = true;
}
const handleClose = () => {
  dialogVisible.value = false;
  console.log("关闭弹窗")
  emit('close')
}
defineExpose({
  handleOpen,
  handleClose,
});
</script>
<style scoped></style>
