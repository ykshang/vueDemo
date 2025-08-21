import {
  Checked,
  DataAnalysis,
  HomeFilled,
  Menu,
  OfficeBuilding,
  Setting,
  UserFilled,
} from '@element-plus/icons-vue'

export default [
  {
    index: '/Home',
    title: '首页',
    icon: HomeFilled,
    subMenu: [
      {
        index: '/Home/HomePage',
        title: '首页',
        icon: HomeFilled,
      },
      {
        index: '/Home/DashBoard',
        title: '看板',
        icon: DataAnalysis,
      },
    ],
  },
  {
    index: '/Setting',
    title: '配置',
    icon: Setting,
    subMenu: [
      {
        index: '/Setting/Profile',
        title: '个人中心',
        icon: UserFilled,
      },
      {
        index: '/Setting/DepartmentMangement',
        title: '部门管理',
        icon: OfficeBuilding,
      },
      {
        index: '/Setting/MenuMangement',
        title: '菜单管理',
        icon: Menu,
      },
      {
        index: '/Setting/TaskMangement',
        title: '任务管理',
        icon: Checked,
      },
    ],
  },
]
