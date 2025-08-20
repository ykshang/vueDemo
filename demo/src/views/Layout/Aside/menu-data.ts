import type { OperationMenu } from '@/types/menu'
import {
  Checked,
  HomeFilled,
  Menu,
  OfficeBuilding,
  Setting,
  DataAnalysis,
  UserFilled,
} from '@element-plus/icons-vue'

export default <OperationMenu[]>[
  {
    index: '1',
    title: '首页',
    icon: HomeFilled,
    subMenu: [
      {
        index: '1-1',
        title: '首页',
        icon: HomeFilled,
        path: '/',
      },
      {
        index: '1-2',
        title: '看板',
        icon: DataAnalysis,
        path: '/about',
      },
    ],
  },
  {
    index: '2',
    title: '配置',
    icon: Setting,
    subMenu: [
      {
        index: '2-1',
        title: '个人中心',
        icon: UserFilled,
        path: '/AttrView',
      },
      {
        index: '2-2',
        title: '部门管理',
        icon: OfficeBuilding,
        path: '/refs',
      },
      {
        index: '2-3',
        title: '菜单管理',
        icon: Menu,
        path: '/inject',
      },
      {
        index: '2-4',
        title: '任务管理',
        icon: Checked,
      },
    ],
  },
]
