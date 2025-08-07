<template>
  <div class="person">
    <div>
      <div v-for="item in aaa" :key="item.id">
        <span> name：{{ item.name }}, age: {{ item.age }} </span>
      </div>
    </div>
    <div>{{ bbb }}</div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, withDefaults } from 'vue'
import { type PersonList } from '@/types/index'
defineOptions({ name: 'person-1' })
// 接收参数
// defineProps(['aaa', 'bbb'])
interface Props {
  aaa: PersonList
  bbb?: string
}
// const props = defineProps<Props>()
const props = withDefaults(defineProps<Props>(), {
  aaa: () => [{ id: '1', age: 21, name: 'zhangsan' }],
})
console.log(props)
const personList = reactive<PersonList>([
  { id: '1', age: 21, name: 'zhangsan' },
  { id: '2', age: 22, name: 'lisi' },
  { id: '3', age: 24, name: 'wangwu' },
])
// const personList: PersonInterface[] = []
console.log(personList)
</script>
<style scoped>
.person {
  display: flex;
  padding: 30px;
}
</style>
