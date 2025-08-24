import { DataAnalysis, OfficeBuilding, User } from '@element-plus/icons-vue'

import RiAppsLine from '~icons/ri/apps-line'
import RiBox3Line from '~icons/ri/box-3-line'
import RiCalendarTodoLine from '~icons/ri/calendar-todo-line'
import RiGroupLine from '~icons/ri/group-line'
import RiHome2Line from '~icons/ri/home-2-line'
import RiHome3Line from '~icons/ri/home-3-line'
import RiRemixiconLine from '~icons/ri/remixicon-line'
import RiUserSettingsLine from '~icons/ri/user-settings-line'

export default [
  {
    index: '/Home',
    title: '首页',
    icon: RiHome3Line,
    subMenu: [
      {
        index: '/Home/HomePage',
        title: '欢迎页',
        icon: RiHome2Line,
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
    icon: RiUserSettingsLine,
    subMenu: [
      {
        index: '/Setting/Profile',
        title: '个人信息',
        icon: User,
      },
      {
        index: '/Setting/EmployeeManagent',
        title: '员工管理',
        icon: RiGroupLine,
      },
      {
        index: '/Setting/DepartmentMangement',
        title: '部门管理',
        icon: OfficeBuilding,
      },
      {
        index: '/Setting/MenuMangement',
        title: '菜单管理',
        icon: RiAppsLine,
      },
      {
        index: '/Setting/TaskMangement',
        title: '任务管理',
        icon: RiCalendarTodoLine,
      },
    ],
  },
  {
    index: '/Components',
    title: '内置组件',
    icon: RiBox3Line,
    subMenu: [
      {
        index: '/Components/IconList',
        title: '图标组件',
        icon: RiRemixiconLine,
      },
    ],
  },
]
