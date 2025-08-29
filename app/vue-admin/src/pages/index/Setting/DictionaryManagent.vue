<script setup lang="ts">
import { reactive } from 'vue'
import dictionaryService from '~/composables/services/dictionaryService'

const request: Dictionary = {
  dictionaryKey: 'test',
  name: '测试字典',
  desc: '测试字典',
}
dictionaryService.createDictionary(request).then((res) => {
  // eslint-disable-next-line no-console
  console.log('字典列表', res)
  // if (res.status === 'success') {
  // console.log('字典列表', res.data)
  // } else {
  // console.log('获取字典列表失败', res.msg)
  // }
})
dictionaryService.getDictionaryList().then((res) => {
  // eslint-disable-next-line no-console
  console.log('字典列表', res)
})
const formInline = reactive({
  key: '',
  name: '',
})
function onSubmit() {
  console.log('查询字典', formInline)
}
</script>

<template>
  <div class="page-container">
    <div class="page-container-header">
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="字典 Key">
          <el-input v-model="formInline.key" placeholder="请输入字典关键词" clearable />
        </el-form-item>
        <el-form-item label="字典名称">
          <el-input v-model="formInline.name" placeholder="请输入字典名称" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">
            查询
          </el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="page-container-content">
      <el-table :data="[]" border style="width: 100%" header-cell-class-name="table-header-cell">
        <el-table-column prop="date" label="日期" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </div>
  </div>
</template>
