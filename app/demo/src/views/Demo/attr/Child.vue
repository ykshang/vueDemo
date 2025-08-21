<template>
  <div class="child">
    <div>
      <div>子组件</div>
      <div>a：{{ a }}</div>
      <div>b：{{ b }}</div>
      <div>{{ $attrs }}</div>
    </div>
    <GrandChild :e="e" v-bind="$attrs"></GrandChild>
  </div>
</template>
<script setup lang="ts">
import { ref, useAttrs } from 'vue'
import GrandChild from './GrandChild.vue'
defineOptions({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Child',
})
defineProps(['a', 'b'])
const attr = useAttrs()
const e = ref('e')
console.log(attr)
</script>
<style scoped>
.child {
  display: flex;
  margin: 10px;
  padding: 10px;
  border: 2px dashed var(--el-color-primary);
  flex: 1;
}
</style>
