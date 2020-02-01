<template>
<div>
  <div class="logo">
    <el-image class="logoStyle" :src="logoSrc" :fit="'contain'">
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
  },
  methods: {
  }
};
</script>
<style scoped>
.logo {
  margin: 15px 0px;
  height: 30px;
  width: 168px;
}
</style>
