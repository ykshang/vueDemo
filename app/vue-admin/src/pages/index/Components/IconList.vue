<script lang="ts" setup></script>

<template>
  <div class="flex-1 p-20px">
    <my-card>
      <template #title>
        @element-plus/icons-vue
      </template>
      <template #content>
        本应用预装了 <el-text type="primary">
          @element-plus/icons-vue
        </el-text> 图标库，您可以直接使用。
        具体使用方式，可以参考
        <el-link type="primary" target="_blank" href="https://element-plus.org/zh-CN/component/icon.html">
          Element-Plus 官方文档
          <div class="i-ri:external-link-line" ml-3px />
        </el-link>
      </template>
    </my-card>
    <my-card class="mt-20px">
      <template #title>
        @iconify-json
      </template>
      <template #content>
        本系统已经预装了 <el-text type="primary">
          @iconify-json
        </el-text> 图标库的 <el-text type="primary">
          ri
        </el-text>
        、
        <el-text type="primary">
          ep
        </el-text>
        两个集合（sets）。您可以直接通过 UnoCSS 以 class （
        <el-text type="primary">
          class="i-sets:icon-name"
        </el-text>）、指令（<el-text type="primary">
          i-sets-icon-name
        </el-text> ）的形式使用，无需额外导入。
        <br />
        图标集合链接：
        <el-link type="primary" target="_blank" href="https://icon-sets.iconify.design/ri/?keyword=ri">
          Remix Design 图标集合（ri）
          <div class="i-ri:external-link-line" />
        </el-link>
        、
        <el-link type="primary" target="_blank" href="https://icon-sets.iconify.design/ri/?keyword=ri">
          Element Plus 图标集合（ep）
          <div i-ri-external-link-line />
        </el-link>
        <el-text ml-5px>
          （选中一个图标后，可以查看如何通过 UnoCSS 引用该图标）
        </el-text>
      </template>
    </my-card>
  </div>
</template>
