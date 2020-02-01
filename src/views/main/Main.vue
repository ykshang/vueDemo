<template>
<div>
  <div class="menu_button">
    <el-button-group  v-show="false">
      <el-button icon="el-icon-fa fa-bars" v-if="isCollapse" @click="changeCollapse" size="mini" circle></el-button>
      <el-button icon="el-icon-fa fa-ellipsis-h" v-if="!!!isCollapse" @click="changeCollapse" size="mini" circle></el-button>
    </el-button-group>
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
    console.log(424242);
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
.logo {
    width: auto;
    height: 40px;
    margin: 10px 0px;
}
.menu_button {
  position: relative;
}
</style>
