<script setup lang="ts">
import { reactive, ref } from 'vue'
import dictionaryService from '~/composables/services/dictionaryService'

// const request = {
//   dictionaryKey: 'test-31',
//   name: '测试字典14',
//   desc: '这是一个测试字典',
// }

// dictionaryService.createDictionary(request).then((res) => {
//   console.log('字典列表', res)
//   if (res.status === 'success') {
//     console.log('字典列表', res.data)
//   } else {
//     console.log('获取字典列表失败', res.msg)
//   }
// })
const tableData = ref<Dictionary[]>([])
// 初始化加载表格数据
initTableData()
function initTableData() {
  dictionaryService.getDictionaryList().then((res: any) => {
    // console.log('字典列表', res)
    if (res.status === 'success') {
      tableData.value = res.data
    }
  })
}
const formInline = reactive({
  key: '',
  name: '',
})
function onSubmit() {
  // console.log('查询字典', formInline)
}
</script>

<template>
  <div class="page-container">
    <div class="page-container-header">
      <div flex flex-1>
        <el-button type="primary">
          新增
        </el-button>
      </div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item>
          <el-input v-model="formInline.key" placeholder="请输入字典关键词" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-container-content flex flex-1">
      <el-table :data="tableData" style="width: 100%; flex:1">
        <el-table-column type="index" width="50" />
        <el-table-column prop="dictionaryKey" label="关键字" width="200" />
        <el-table-column prop="name" label="字典名称" width="200" />
        <el-table-column prop="desc" label="描述" />
        <el-table-column prop="createdAt" label="创建时间" width="200" />
        <el-table-column prop="updatedAt" label="更新时间" width="200" />
      </el-table>
    </div>
  </div>
</template>
