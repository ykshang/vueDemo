<template>
<div style="hegiht:'100%'">
  <div class="menu_button">
    <el-button-group>
      <el-button type="info" v-if="isCollapse" @click="changeCollapse" icon="el-icon-s-fold" size="mini" round></el-button>
      <el-button type="info" v-if="!!!isCollapse" @click="changeCollapse" icon="el-icon-caret-left" size="mini" round></el-button>
    </el-button-group>
  </div>
</div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      isCollapse: this.$isCollapse
    };
  },
  mounted () {
    console.log(424242);
  },
  methods: {
    changeCollapse () {
      console.log(this.$isCollapse);
      this.$isCollapse = !this.$isCollapse;
      this.isCollapse = this.$isCollapse;
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
