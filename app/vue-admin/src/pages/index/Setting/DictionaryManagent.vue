<script setup lang="ts">
import { reactive, ref } from 'vue'
import dictionaryService from '~/composables/services/dictionaryService'

// dictionaryService.createDictionary(request).then((res) => {

//   // console.log('字典列表', res)
//   // if (res.status === 'success') {
//   // console.log('字典列表', res.data)
//   // } else {
//   // console.log('获取字典列表失败', res.msg)
//   // }
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
        <el-form-item label="字典 Key">
          <el-input v-model="formInline.key" placeholder="请输入字典关键词" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-container-content">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column type="index" width="50" />
        <el-table-column prop="dictionaryKey" label="关键字" width="180" />
        <el-table-column prop="name" label="字典名称" width="180" />
        <el-table-column prop="desc" label="描述" />
      </el-table>
    </div>
  </div>
</template>
