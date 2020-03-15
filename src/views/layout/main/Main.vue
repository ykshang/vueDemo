<template>
<div>
  <div class="breadcrumb">
    <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    <el-breadcrumb-item>活动列表</el-breadcrumb-item>
    <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
  <div class="router_view_des">
    <i class="fa fa-spinner fa-spin"></i>
    <i class="fa fa-circle-o-notch fa-spin"></i>
    <i class="fa fa-refresh fa-spin"></i>
    <i class="fa fa-cog fa-spin"></i>
    <i class="fa fa-spinner fa-pulse"></i>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isCollapse: true
    };
  },
  mounted () {
  },
  methods: {
    changeCollapse () {
      console.log(this.$isCollapse);
      this.isCollapse = !this.isCollapse;
    }
  }
};
</script>
<style scoped>
.breadcrumb {
  width: auto;
  margin: 10px 0px 15px 0px;
}
.router_view_des {
  width: auto;
  background-color: #e4ebf1;
  min-height: 40px;
}
</style>
