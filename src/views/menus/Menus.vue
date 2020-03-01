<template>
<div style="position:'relative'">
  <div class="el-card box-card" style="text-align: center; padding:9px; border: 1px solid #EBEEF5; background-color: #FFF; color: #303133; -webkit-transition: .3s; transition: .3s">
      <span v-if="!!!isCollapse">{{$t("menu.navigationMenu")}}</span>
      <el-button  v-if="isCollapse" icon="fa fa-th fa-lg" type="text" @click="changeCollapse"></el-button>
      <el-button v-else icon="fa fa-outdent fa-lg"  type="text" style="float: right;" @click="changeCollapse" size="mini"></el-button>
  </div>
  <el-menu class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" @select="onSelect">
    <template v-for="menu in menuList">
        <el-submenu :index="menu.key" :key="menu.key" v-if="menu.flag && menu.subMenus && menu.subMenus.length != 0">
            <template slot="title" v-if="menu.subMenus">
              <i :class="menu.iconType"></i>
              <span>{{menu.name}}</span>
            </template>
            <el-menu-item v-for="subMenu in menu.subMenus" :key="subMenu.key" :index="subMenu.key">
              <template slot="title" v-if="subMenu.flag">
                <i :class="[subMenu.iconType]"></i>
                <span>{{subMenu.name}}</span>
              </template>
            </el-menu-item>
        </el-submenu>
        <el-menu-item :index="menu.key"  :key="menu.key" v-if="menu.flag && (!menu.subMenus || menu.subMenus.length === 0)">
          <i :class="menu.iconType"></i>
          <span>{{menu.name}}</span>
        </el-menu-item>
    </template>
  </el-menu>
</div>
</template>
<style>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>

<script>
import Vue from 'vue';
import menuList from './menuList';
export default {
  name: 'Menus',
  data () {
    return {
      isCollapse: false,
      menuList: menuList.bind(this)()
    };
  },
  mounted () {
    //  this.$i18n.locale === 'zh_CN' ? this.language = 0 : this.language = 1;// 数据加载时判断当前属于哪种语言，为其单选按钮赋值
  },
  methods: {
    changeCollapse () {
      this.isCollapse = !this.isCollapse;
    },
    onSelect (key, keyPath) {
      console.log(key);
      console.log(keyPath);
      console.log(keyPath.join('/'));
      let path = keyPath.join('/');
    },
    handleOpen (key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
