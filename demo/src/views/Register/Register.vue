<template>
  <div class="register-dialog">
    <el-dialog title="用户注册" v-model="dialogVisible" width="600px" @closed="handleClose" draggable>
      <el-form :model="registerForm" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="registerForm.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="registerForm.password"></el-input>
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
import { ref } from 'vue';
import type { RegisterForm } from '@/types/user';
defineOptions({
  name: 'RegisterView',
})
const emit = defineEmits(["close"]);
// 控制弹窗显示
const dialogVisible = ref(false);
// 初始化注册表单
const registerForm = ref<RegisterForm>({
  username: '',
  password: '',
  email: ''
});
const handleRegister = () => {
  // 这里可添加注册逻辑，如调用 API
  console.log('注册信息:', registerForm.value);
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
