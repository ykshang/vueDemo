import { defineAsyncComponent, markRaw } from 'vue'

const menuDataTree = [
  {
    path: '/Home',
    title: '首页',
    icon: markRaw(defineAsyncComponent(() =>
      import('~icons/ri/home-3-line'),
    )),
    subMenu: [
      {
        path: '/Home/HomePage',
        title: '欢迎页',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/home-2-line'),
        )),
      },
      {
        path: '/Home/DashBoard',
        title: '数据看板',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/bar-chart-box-ai-line'),
        )),
      },
      {
        path: '/Home/Demo',
        title: '测试 Demo',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/alarm-warning-line'),
        )),
      },
    ],
  },
  {
    path: '/Setting',
    title: '配置中心',
    icon: markRaw(defineAsyncComponent(() =>
      import('~icons/ri/user-settings-line'),
    )),
    subMenu: [
      {
        path: '/Setting/Profile',
        title: '个人信息',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/user-3-line'),
        )),
      },
      {
        path: '/Setting/EmployeeManagent',
        title: '员工管理',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/group-line'),
        )),
      },
      {
        path: '/Setting/DepartmentMangement',
        title: '部门管理',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/building-line'),
        )),
      },
      {
        path: '/Setting/MenuMangement',
        title: '菜单管理',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/apps-line'),
        )),
      },
      {
        path: '/Setting/TaskMangement',
        title: '任务管理',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/calendar-todo-line'),
        )),
      },
      {
        path: '/Setting/DictionaryManagent',
        title: '字典管理',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/book-2-line'),
        )),
      },
    ],
  },
  {
    path: '/Components',
    title: '内置组件',
    icon: markRaw(defineAsyncComponent(() =>
      import('~icons/ri/box-3-line'),
    )),
    subMenu: [
      {
        path: '/Components/IconList/',
        title: '图标组件',
        icon: markRaw(defineAsyncComponent(() =>
          import('~icons/ri/remixicon-line'),
        )),
      },
    ],
  },
]
const defaultHomePage = {
  path: '/Home/HomePage',
  title: '欢迎页',
  icon: markRaw(defineAsyncComponent(() =>
    import('~icons/ri/home-2-line'),
  )),
  readonly: true,
}
// 递归塞list
function flatMenuDataTree(dataList: any, result: any, parent: any) {
  dataList.forEach((item: any) => {
    item.parent = parent
    result.push(item)
    if (item.subMenu && item.subMenu.length > 0) {
      flatMenuDataTree(item.subMenu, result, item)
    }
  })
  return result
}
const menuDataList = flatMenuDataTree(menuDataTree, [], { path: '/', name: 'root', title: '根目录' })
export {
  defaultHomePage,
  menuDataList,
  menuDataTree,
}
