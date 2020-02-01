<template>
  <div>
    <el-container style="border: 1px solid #eee">
      <el-header height="60px">
        <Header></Header>
      </el-header>
      <el-container style="position: absolute; top: 60px; width: 100%; height: auto; bottom: 0px; left: 0px">
        <el-aside width="auto">
          <menus></menus>
        </el-aside>
        <el-container>
          <el-main>
            <Main></Main>
          </el-main>
          <el-footer height="60px">Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menus from './menus/Menus';
import Header from './headers/Header';
import Main from './main/Main';
export default {
  name: 'Index',
  data () {
    return {
    };
  },
  methods: {
  },
  components: {
    Menus,
    Header,
    Main
  }
};
</script>

<style scoped>
  .el-aside {
    color: #333;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0px;
    margin: 0px;
  }
  .el-header {
    background-color: #3385ff;
    color: #333;
  }
  .el-footer {
    background-color: #B3C0D1;
    color: #333;
  }
</style>
