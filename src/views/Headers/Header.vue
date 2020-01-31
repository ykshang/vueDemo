<template>
<div style="hegiht:'100%'">
  <el-row></el-row>
  <div class="logo">
      <el-image
        style="width: 40px; height: 40px"
        :src="logoSrc"
        :fit="'contain'">
      </el-image>
  </div>
</div>
</template>

<script>
import logo from '../../assets/img/logo.png';
export default {
  name: 'Header',
  data () {
    return {
      logoSrc: logo
    };
  },
  mounted () {
    console.log(424242);
  },
  methods: {
  }
};
</script>
<style scoped>
.logo {
    width: auto;
    height: 40px;
    margin: 10px 0px;
}
</style>
