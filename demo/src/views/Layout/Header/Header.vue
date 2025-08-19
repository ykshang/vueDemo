<template>
  <el-header class="header">
    <span @click="clickExpand">
      <Expand v-if="isExpandFlag" class="expand_btn"></Expand>
      <Fold v-else class="expand_btn"></Fold>
    </span>
    <div class="flex-1">1</div>
    <!-- <TogglerTheme></TogglerTheme> -->
    <UserAvatar></UserAvatar>
  </el-header>
</template>

<script setup lang="ts">
// import TogglerTheme from './TogglerTheme.vue'
import { Expand, Fold } from '@element-plus/icons-vue';
import UserAvatar from './UserAvatar.vue'
import { ref } from 'vue';
import emitter from '@/util/emitter'
defineOptions({
  name: 'HeaderLayout',
})
const isExpandFlag = ref(true)
const clickExpand = () => {
  isExpandFlag.value = !isExpandFlag.value
  // 触发菜单展开关闭事件
  emitter.emit('menu:expanded', isExpandFlag.value)
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dbcae0;

  // background-color: var(--el-color-primary)
  .expand_btn {
    width: 20px;

    &:hover {
      color: var(--el-color-primary);
      cursor: pointer;
    }
  }
}
</style>
