<script lang="ts" setup></script>

<template>
  <div class="flex-1 p-20px">
    <base-ui-card>
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
    </base-ui-card>
    <base-ui-card class="mt-20px">
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
        两个集合（sets），已配置 <el-text type="primary">
          UnoCSS
        </el-text>、<el-text type="primary">
          unplugin-icons
        </el-text>
        的支持。您可以直接通过 <el-text type="primary">
          UnoCSS
        </el-text>、<el-text type="primary">
          Unplugin Icons
        </el-text>、<el-text type="primary">
          Iconify Icon
        </el-text> 等方式引入图标。
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
          （选中一个图标后，可以查看具体引入方式的对应代码）
        </el-text>
      </template>
    </base-ui-card>
  </div>
</template>
