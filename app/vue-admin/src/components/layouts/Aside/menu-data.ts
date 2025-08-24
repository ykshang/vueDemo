import { DataAnalysis, OfficeBuilding, User } from '@element-plus/icons-vue'

import {
  IconBox,
  IconGroup,
  IconHomePage,
  IconHomePage1,
  IconIcon,
  IconMenu,
  IconTodo,
} from '~/components/icons'

export default [
  {
    index: '/Home',
    title: '首页',
    icon: IconHomePage,
    subMenu: [
      {
        index: '/Home/HomePage',
        title: '欢迎页',
        icon: IconHomePage1,
      },
      {
        index: '/Home/DashBoard',
        title: '数据看板',
        icon: DataAnalysis,
      },
    ],
  },
  {
    index: '/Setting',
    title: '配置中心',
    icon: IconMenu,
    subMenu: [
      {
        index: '/Setting/Profile',
        title: '个人中心',
        icon: User,
      },
      {
        index: '/Setting/EmployeeManagent',
        title: '员工管理',
        icon: IconGroup,
      },
      {
        index: '/Setting/DepartmentMangement',
        title: '部门管理',
        icon: OfficeBuilding,
      },
      {
        index: '/Setting/MenuMangement',
        title: '菜单管理',
        icon: IconMenu,
      },
      {
        index: '/Setting/TaskMangement',
        title: '任务管理',
        icon: IconTodo,
      },
    ],
  },
  {
    index: '/Components',
    title: '内置组件',
    icon: IconBox,
    subMenu: [
      {
        index: '/Components/IconList',
        title: '图标组件',
        icon: IconIcon,
      },
    ],
  },
]
