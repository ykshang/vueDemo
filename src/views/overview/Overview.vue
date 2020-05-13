<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="id" label="Id" width="300">
      </el-table-column>
      <el-table-column prop="name" label="名称" width="470">
        <template slot-scope="scope">
          <column-hover type="" :content="scope.row.name" :row="scope.row" :clickContent="clickName" icon="fa fa-folder-open" iconStyle="color: #ffb509" :iconList="iconList">1</column-hover>
        </template>
      </el-table-column>
      <el-table-column prop="date" label="日期" width="200px">
      </el-table-column>
      <el-table-column prop="des" label="描述">
      </el-table-column>
    </el-table>
    <el-divider></el-divider>
    <p>div默认情况下会独占一行：</p>
    <div style="border: 1px dashed">ddd</div>
  </div>
</template>

<script>
import ColumnHover from "./ColumnHover";
export default {
  name: 'Overview',
  data () {
    return {
      tableData: [{
        date: '2018-05-02',
        name: 'VolumeSolt@AutoSnap d6b44619-7767-4904-9018-3b709a179af3',
        id: 'd6b44619-7767-4904-9018-3b709a179af3',
        des: "云计划任务自动生成的云硬盘 快照"
      }, {
        date: '2018-05-04',
        name: '蒸羊羔,蒸熊掌,蒸鹿尾儿,烧花鸭,烧雏鸡儿,烧子鹅,卤煮咸鸭,酱鸡,松花,小肚儿,晾肉,香肠,什锦苏盘',
        id: '2c559087-e3f4-4c53-8b8c-416f785fcb35'
      }, {
        date: '2018-05-01',
        name: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        id: '85f1a346-987a-4207-bdfe-e4d93ff8386c',
        des: "null"
      }, {
        date: '2018-05-03',
        name: '王小虎',
        id: 'bef8b732-afc8-4255-8622-a380749838f4',
        des: "上海市普陀区金沙江路 1518 弄"
      }],
      iconList: [{
        icon: "fa fa-heart-o",
        enabled: function (row) {
          return row.name !== "王小虎";
        },
        handler: function (row) {
          this.$message.info("收藏成功");
        }.bind(this)
      }, {
        icon: "fa fa-share-alt",
        handler: function (row) {
          this.$message.error("分享成功");
        }.bind(this)
      }, {
        icon: "fa fa-ellipsis-h",
        handler: function (row) {
          this.$message.warning("更多");
        }.bind(this)
      }]
    };
  },
  mounted () {
  },
  methods: {
    clickName (value) {
      this.$message.info("click name");
    }
  },
  components: {
    ColumnHover
  }
};
</script>
<style scoped>
.table {
  margin: 30px;
}
/* .tableCss >>> .el-table--enable-row-hover .el-table__body tr td:hover .column_icon { */
div >>> .el-table--enable-row-hover .el-table__body tr:hover>td .column_icon {
  display: inline-flex;
}
</style>
