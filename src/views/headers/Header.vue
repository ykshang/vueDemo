<template>
<div>
  <div class="logo">
    <el-image class="logoStyle" :src="logoSrc" :fit="'contain'">
    </el-image>
  </div>
  <div class="avatar">
    <el-avatar :src="avatarSrc"></el-avatar>
  </div>
</div>
</template>

<script>
import logo from '../../assets/img/logo.png';
export default {
  name: 'Header',
  data () {
    return {
      logoSrc: logo,
      avatarSrc: "https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
    };
  },
  mounted () {
  },
  methods: {
  }
};
</script>
<style scoped>
.logo {
  margin: 15px 0px;
  float: left;
  height: 30px;
  width: 168px;
}
.avatar {
  float: right;
  margin: 8px 20px;
}
</style>
