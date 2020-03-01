// 菜单列表
module.exports = function () {
  return [{
    flag: true,
    icon: 'el-icon-fa fa-thumb-tack',
    key: 'overview',
    name: this.$t('menu.overview'), // 概览
    path: 'overview',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-tags',
    key: 'task',
    name: this.$t('menu.task'), // 待办任务
    path: 'task',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-calendar',
    key: 'vacation',
    name: this.$t('menu.vacation'), // 考勤管理
    path: 'vacation',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'attendance',
      name: this.$t('menu.attendance'), // 请假
      path: 'attendance',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-sitemap',
    key: 'organization',
    name: this.$t('menu.organization'), // 组织结构
    path: 'organization',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-money',
    key: 'reimburse',
    name: this.$t('menu.reimburse'), // 报销管理
    path: 'reimburse',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-line-chart',
    key: 'timeline',
    name: this.$t('menu.timeline'), // 工时管理
    path: 'timeline',
    subMenus: []
  }];
};
