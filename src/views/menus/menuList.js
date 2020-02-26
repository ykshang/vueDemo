// 菜单列表
module.exports = function () {
  return [{
    flag: true,
    key: 'overview',
    name: '概览',
    path: 'overview',
    iconType: 'el-icon-fa fa-thumb-tack',
    subMenus: []
  }, {
    flag: true,
    key: 'task',
    name: '待办任务',
    path: 'task',
    iconType: 'el-icon-fa fa-tags',
    subMenus: []
  }, {
    flag: true,
    key: 'vacation',
    name: '考勤管理',
    path: 'vacation',
    iconType: 'el-icon-fa fa-calendar',
    subMenus: [{
      flag: true,
      key: 'attendance',
      name: this.$t("base.userInfo"),
      path: 'attendance',
      iconType: 'el-icon-fa fa-home',
      subMenus: []
    }]
  }, {
    flag: true,
    key: 'organization',
    name: '组织结构',
    path: 'organization',
    iconType: 'el-icon-fa fa-sitemap',
    subMenus: []
  }, {
    flag: true,
    key: 'reimburse',
    name: '报销管理',
    path: 'reimburse',
    iconType: 'el-icon-fa fa-money',
    subMenus: []
  }, {
    flag: true,
    key: 'timeline',
    name: '工时管理',
    path: 'timeline',
    iconType: 'el-icon-fa fa-line-chart',
    subMenus: []
  }];
};
