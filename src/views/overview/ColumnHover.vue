<template>
  <div class="column">
    <div class="column_content">
      <i :class="icon" v-if="!!icon" :style="'margin-right: 5px; font-size: 1.3em;'+ iconStyle"></i>
      <div :class="contentStyle" :title="content" @click="clickFun(row)">{{content}}</div>
    </div>
    <div class="column_icon" v-if="showIconListFlag">
      <i v-for="(item, index) in icons" :key="index" :class="item.icon" @click="item.handler(row)"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ColumnHover',
  props: ["icon", "type", "clickContent", "iconStyle", "row", "content", "iconList"],
  data () {
    return {
      contentStyle: "",
      clickFun: "",
      showIconListFlag: false,
      icons: []
    };
  },
  mounted () {
    this.clickFun = function () {};
    if (this.type === "text") {
      this.contentStyle = "content";
    } else {
      this.contentStyle = "content el-button--text";
      if (Object.prototype.toString.call(this.clickContent) === "[object Function]") {
        this.clickFun = this.clickContent;
      }
    }
    this.init();
    if (!this.row) {
      throw new Error("The prop 'row' is Required");
    }
  },
  methods: {
    init () {
      this.icons = [];
      this.iconList.forEach(item => {
        if (item.icon && Object.prototype.toString.call(item.handler) === "[object Function]") {
          if (!item.enabled || (item.enabled && Object.prototype.toString.call(item.enabled) === "[object Function]" && item.enabled(this.row) === true)) {
            this.icons.push({
              icon: item.icon,
              handler: item.handler
            });
          }
        }
      });
      if (this.icons.length > 0) {
        this.showIconListFlag = true;
      } else {
        this.showIconListFlag = false;
      }
    }
  }
};
</script>
<style scoped>
.column {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.column_content {
  flex: 1;
  min-width: 0;
  display: flex;
  align-items: center;
}
.column_icon {
  display: none;
 }
.content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
}
.column_icon i {
  margin: 0px 5px;
  font: 1.5em;
  display: inline-block;
}
.column_icon i:hover {
  color: #409EFF;
  cursor: pointer;
}
</style>
