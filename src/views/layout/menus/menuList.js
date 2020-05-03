// 菜单列表
module.exports = function () {
  return [{
    flag: true,
    icon: 'el-icon-fa fa-thumb-tack',
    key: 'Overview',
    name: this.$t('menu.overview'), // 概览
    path: 'Overview',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-tags',
    key: 'Task',
    name: this.$t('menu.task'), // 待办任务
    path: 'Task',
    subMenus: []
  }, {
    flag: true,
    icon: 'el-icon-fa fa-calendar',
    key: 'Vacation',
    name: this.$t('menu.vacation'), // 考勤管理
    path: 'Vacation',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'AttendanceLog',
      name: this.$t('menu.attendanceLog'), // 考勤记录
      path: 'AttendanceLog',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'AttendanceTicket',
      name: this.$t('menu.attendanceTicket'), // 考勤单据
      path: 'AttendanceTicket',
      subMenus: []
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'AttendanceApproval',
      name: this.$t('menu.attendanceApproval'), // 考勤审批
      path: 'AttendanceApproval',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-sitemap',
    key: 'Organization',
    name: this.$t('menu.organization'), // 组织结构
    path: 'Organization',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'Deptment',
      name: this.$t('menu.deptment'), // 部门管理
      path: 'Deptment'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'Employee',
      name: this.$t('menu.employee'), // 员工管理
      path: 'Employee'
    }, {
      flag: true,
      icon: 'el-icon-fa fa-home',
      key: 'Position',
      name: this.$t('menu.position'), // 岗位管理
      path: 'Position'
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-money',
    key: 'Finance',
    name: this.$t('menu.finance'), // 财务管理
    path: 'Finance',
    subMenus: [{
      flag: true,
      icon: 'el-icon-fa fa-money',
      key: 'Finance',
      name: this.$t('menu.finance'), // 薪酬清单
      path: 'Finance',
      subMenus: []
    }]
  }, {
    flag: true,
    icon: 'el-icon-fa fa-line-chart',
    key: 'Timeline',
    name: this.$t('menu.timeline'), // 工时管理
    path: 'Timeline',
    subMenus: []
  }];
};
