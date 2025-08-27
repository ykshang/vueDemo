import { ref } from 'vue'

import RiAlarmWarningLine from '~icons/ri/alarm-warning-line'
import RiAppsLine from '~icons/ri/apps-line'
import RiBarChartBoxAiLine from '~icons/ri/bar-chart-box-ai-line'
import RiBox3Line from '~icons/ri/box-3-line'
import RiBuildingLine from '~icons/ri/building-line'
import RiCalendarTodoLine from '~icons/ri/calendar-todo-line'
import RiGroupLine from '~icons/ri/group-line'
import RiHome2Line from '~icons/ri/home-2-line'
import RiHome3Line from '~icons/ri/home-3-line'
import RiRemixiconLine from '~icons/ri/remixicon-line'
import RiUser3Line from '~icons/ri/user-3-line'
import RiUserSettingsLine from '~icons/ri/user-settings-line'

const menuDataTree = [
  {
    path: '/Home',
    title: '首页',
    icon: RiHome3Line,
    subMenu: [
      {
        path: '/Home/HomePage',
        title: '欢迎页',
        icon: RiHome2Line,
      },
      {
        path: '/Home/DashBoard',
        title: '数据看板',
        icon: RiBarChartBoxAiLine,
      },
      {
        path: '/Home/Demo',
        title: '测试 Demo',
        icon: RiAlarmWarningLine,
      },
    ],
  },
  {
    path: '/Setting',
    title: '配置中心',
    icon: RiUserSettingsLine,
    subMenu: [
      {
        path: '/Setting/Profile',
        title: '个人信息',
        icon: RiUser3Line,
      },
      {
        path: '/Setting/EmployeeManagent',
        title: '员工管理',
        icon: RiGroupLine,
      },
      {
        path: '/Setting/DepartmentMangement',
        title: '部门管理',
        icon: RiBuildingLine,
      },
      {
        path: '/Setting/MenuMangement',
        title: '菜单管理',
        icon: RiAppsLine,
      },
      {
        path: '/Setting/TaskMangement',
        title: '任务管理',
        icon: RiCalendarTodoLine,
      },
    ],
  },
  {
    path: '/Components',
    title: '内置组件',
    icon: RiBox3Line,
    subMenu: [
      {
        path: '/Components/IconList',
        title: '图标组件',
        icon: RiRemixiconLine,
      },
    ],
  },
]
const defaultHomePage = ref({
  path: '/Home/HomePage',
  title: '欢迎页',
  icon: RiHome2Line,
})
const menuDataList = menuDataTree.flatMap(item => item.subMenu)
export {
  defaultHomePage,
  menuDataList,
  menuDataTree,
}
