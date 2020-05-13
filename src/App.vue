<template>
  <div id="app" style="height:100%,width:100%">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted () {
  },
  methods: {
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
[class^="el-icon-fa"], [class*=" el-icon-fa"] {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome!important;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
@import url("./assets/plug-ins/font-awesome-4.7.0/css/font-awesome.min.css");
$fa-css-prefix: el-icon-fa;
</style>
