<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const input = ref('element-plus')

const curDate = ref('')

const value1 = ref(true)
</script>

<template>
  <div flex-1>
    <el-row :gutter="20">
      <el-col :span="24">
        <Welcome />
      </el-col>
    </el-row>
    <div class="my-2 flex flex-wrap items-center justify-center text-center">
      <el-button @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="primary" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="success" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="warning" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="danger" @click="count++">
        count is: {{ count }}
      </el-button>
      <el-button type="info" @click="count++">
        count is: {{ count }}
      </el-button>
    </div>

    <div>
      <el-tag type="success" class="m-1">
        Tag 1
      </el-tag>
      <el-tag type="warning" class="m-1">
        Tag 1
      </el-tag>
      <el-tag type="danger" class="m-1">
        Tag 1
      </el-tag>
      <el-tag type="info" class="m-1">
        Tag 1
      </el-tag>
    </div>

    <div>
      <el-switch v-model="value1" />
      <el-switch v-model="value1" class="m-2" style="--ep-switch-on-color: black; --ep-switch-off-color: gray;" />
    </div>

    <div class="my-2">
      <el-input v-model="input" class="m-2" style="width: 200px" />
      <el-date-picker v-model="curDate" class="m-2" type="date" placeholder="Pick a day" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ep-button {
  margin: 4px;
}

.ep-button + .ep-button {
  margin-left: 0;
  margin: 4px;
}
</style>
