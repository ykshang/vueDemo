<script lang="ts" setup>
import { ElMessage } from 'element-plus'

import { onMounted, onUnmounted, ref, watch, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { defaultHomePage, menuDataList } from '../Aside/menu-data'

// 路由实例
const route = useRoute()
const router = useRouter()

// tabHistoryStack 页签历史记录栈
const tabHistoryStack = ref<string[]>(['/Home/HomePage'])

// 滚动条元素 ref
const scrollbarRef = ref()

// 滚动条当前位置
const currPosition = ref(0)
// 滚动条最大位置
const maxLeftPosition = ref(0)

// 滚动切换，步长200px
function scrollChange(direction: 'left' | 'right') {
  if (direction === 'left') {
    currPosition.value -= 200
    scrollbarRef.value!.setScrollLeft(currPosition.value as number)
  } else {
    currPosition.value += 200
    scrollbarRef.value!.setScrollLeft(currPosition.value as number)
  }
}
// 滚动按钮
const isShowScrollBtn = ref(false)
// 左侧滚动按钮禁用
const disabledLeftBtn = ref(false)
// 右侧滚动按钮禁用
const disabledRightBtn = ref(false)
let observer: MutationObserver | null = null
onMounted(() => {
  // 监听滚动条动态
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const { clientWidth, scrollWidth } = mutation.target as HTMLElement
        isShowScrollBtn.value = clientWidth < scrollWidth
        maxLeftPosition.value = scrollWidth - clientWidth
      }
    })
  })
  observer.observe(scrollbarRef.value.wrapRef, {
    attributes: true,
    childList: true,
    subtree: true,
  })
  // 动态计算滚动按钮禁用状态
  watchEffect(() => {
    disabledLeftBtn.value = isShowScrollBtn.value && currPosition.value <= 0
    disabledRightBtn.value = isShowScrollBtn.value && currPosition.value >= maxLeftPosition.value
    // 删除标签时，滚动条位置可能会超过最大位置，重置该值
    if (currPosition.value > maxLeftPosition.value) {
      currPosition.value = maxLeftPosition.value
    }
  })
})
// 页面卸载钩子
onUnmounted(() => {
  // 销毁滚动条监听
  observer?.disconnect()
})

// 调整菜单按钮显示隐藏时，动态添加动画
const menuIconref = ref()
function handleDropdownVisible(val: boolean) {
  if (val) {
    menuIconref.value.classList.add('active')
  } else {
    menuIconref.value.classList.remove('active')
  }
}

// 页签列表
const tabItemList = ref<any[]>([])
// Object.assign(tabItemList.value, menuDataList)
tabItemList.value.push(defaultHomePage.value)
const currTab = ref()
currTab.value = defaultHomePage.value
watch(
  () => route.path,
  (newPath) => {
    // 检测该路由是否存在
    const newTab = tabItemList.value.find(tab => tab.path === newPath)
    tabHistoryStack.value.push(newPath)
    // 如果当前路由对应的也i按不存在，添加到页签列表
    if (!newTab) {
      const tabData = menuDataList.find(tab => tab.path === newPath)
      currTab.value = {
        path: tabData?.path,
        icon: tabData?.icon,
        title: tabData?.title,
        readonly: false,
      }

      // 避免浅拷贝带来的数据影响
      tabItemList.value.push(currTab.value)
    } else {
      // 如果当前路由存在，激活该页签
      currTab.value = {
        ...newTab,
      }
    }
    // console.log(newPath, newTabIndex)
    // 路由变化时，重置滚动条位置
    // console.log(tabItemsRef.value[newPath]?.$el?.scrollWidth)
  },
)
// 下拉菜单按钮列表
const dropdownList = ref([{
  label: '刷新',
  icon: 'i-ri:refresh-line mr-5px',
  command: 'refresh',
  callback: cloaseRefreshTab,
}, {
  label: '关闭其他',
  icon: 'i-ri:close-line mr-5px',
  command: 'closeOther',
  callback: cloaseOtherTab,
}, {
  label: '关闭左侧',
  icon: 'i-ri:arrow-left-line mr-5px',
  command: 'closeLeft',
  callback: cloaseLeftTab,
}, {
  label: '关闭右侧',
  icon: 'i-ri:arrow-right-line mr-5px',
  command: 'closeRight',
  callback: cloaseRightTab,
}, {
  label: '关闭全部',
  icon: 'i-ri:close-line mr-5px',
  command: 'closeAll',
  callback: cloaseAllTab,
}])

function cloaseRefreshTab(item: any, command: any) {
  ElMessage({
    message: `${command}：${item.path}`,
    type: 'info',
  })
}
function cloaseOtherTab(item: any, command: any) {
  ElMessage({
    message: `${command}：${item.path}`,
    type: 'info',
  })
}
function cloaseLeftTab(item: any, command: any) {
  ElMessage({
    message: `${command}：${item.path}`,
    type: 'info',
  })
}
function cloaseRightTab(item: any, command: any) {
  ElMessage({
    message: `${command}：${item.path}`,
    type: 'info',
  })
}
function cloaseAllTab(item: any, command: any) {
  ElMessage({
    message: command + item.path,
    type: 'info',
  })
}
// 动态判断页签的下拉菜单按钮是否禁用
function disabledDropitem(tabItem: any, tabItemIndex: number, dropMenu: any) {
  const command = dropMenu.command
  const path = tabItem.path
  const length = tabItemList.value.length
  if (command === 'refresh') {
    // 刷新按钮常亮
    return false
  } else if (command === 'closeAll') {
    // 页签大于2时，显示关闭全部页签
    return length <= 1
  } else if (command === 'closeOther') {
    // 如果是首页，页签至少为2，不是首页 ，页签至少为3
    return path === '/Home/HomePage' ? length < 2 : length < 3
  } else if (dropMenu.command === 'closeLeft') {
    // 至少第三个按钮才会显示关闭左侧
    return tabItemIndex < 2
  } else if (dropMenu.command === 'closeRight') {
    // 最右侧的被禁用
    return tabItemIndex === tabItemList.value.length - 1
  }
  return true
}

// 储存动态引用, 用于关闭其他标签
const tabItemsRef = ref<{ [key: string]: any }>({})
function setTabItemsRef(el: any, path: any) {
  tabItemsRef.value[path] = el
}
// 打开当前下拉框，关闭其他下拉框
function handleTabDropdownVisible(visibility: boolean, item: any) {
  if (visibility) {
    const keys = Object.keys(tabItemsRef.value)
    keys.forEach((key) => {
      if (key !== item) {
        tabItemsRef.value[key]?.handleClose()
      }
    })
  }
}
function disabledMenu() {
  // console.log('disabledMenu')
  return false
}
// 动态计算当前页签的是否激活的样式
function calcActiveClass(tabItem: any) {
  return tabItem.path === currTab.value.path ? 'tab-item active' : 'tab-item'
}
// 点击页签, 切换路由,激活页签
function handleClickTab(tabItem: any) {
  currTab.value = tabItem
  router.push(tabItem.path)
}
// 关闭页签

/**
 * 关闭页签
 * @param tabItem 页签对象
 * @description 如果关闭的是其他页签，直接关闭
 * @description 如果关闭的是当前页签，需要考虑跳转到上一个页签，但是不能是已关闭的页签
 */
function handleCloseTab(tabItem: any) {
  const index = tabItemList.value.findIndex(item => item.path === tabItem.path)
  // 删除当前页签
  tabItemList.value.splice(index, 1)
  // 删除当前页签的历史记录
  tabHistoryStack.value = tabHistoryStack.value.filter(item => item !== tabItem.path)
  if (tabItem.path === currTab.value.path) {
    // 弹出当前的页签，因为跳转到新路由时，该页签还进栈，避免历史重复
    const newPath = tabHistoryStack.value.pop()
    router.push(newPath as string)
  }
}
</script>

<template>
  <div class="tabs-container px-10px">
    <el-button
      v-show="isShowScrollBtn" :disabled="disabledLeftBtn" class="scroll-btn mr-10px"
      @click="scrollChange('left')"
    >
      <div class="i-ri:arrow-left-wide-fill" />
    </el-button>
    <el-scrollbar ref="scrollbarRef" flex-1>
      <div class="scrollbar-content">
        <div v-for="(tabItem, tabItemIndex) in tabItemList" :key="tabItem.path">
          <el-dropdown :ref="val => setTabItemsRef(val, tabItem.path)" trigger="contextmenu" @visible-change="(isVisible: boolean) => handleTabDropdownVisible(isVisible, tabItem.path)">
            <div :class="calcActiveClass(tabItem)" @click="handleClickTab(tabItem)">
              <component :is="tabItem.icon" mr-3px h-16px w-16px />
              {{ tabItem.title }}
              <div v-if="!tabItem.readonly" class="close-btn" @click.stop="handleCloseTab(tabItem)">
                <div class="i-ri:close-line" />
              </div>
              <div class="btn-underline" />
            </div>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item v-for="dropMenu in dropdownList" :key="dropMenu.label" :disabled="disabledDropitem(tabItem, tabItemIndex, dropMenu)" @click="dropMenu.callback(tabItem, dropMenu.command)">
                  <div :class="dropMenu.icon" />
                  <span>{{ dropMenu.label }}</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </div>
    </el-scrollbar>
    <el-button
      v-show="isShowScrollBtn" :disabled="disabledRightBtn" class="scroll-btn ml-10px"
      @click="scrollChange('right')"
    >
      <div class="i-ri:arrow-right-wide-fill" />
    </el-button>
    <div class="mx-30px flex items-center justify-center font-size-16px">
      <el-dropdown placement="bottom-end" @visible-change="handleDropdownVisible">
        <div ref="menuIconref" class="i-ri:apps-fill menu-icon" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item v-for="dropMenu in dropdownList" :key="dropMenu.label" :disabled="disabledMenu()">
              <div :class="dropMenu.icon" />
              <span>{{ dropMenu.label }}</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.tabs-container {
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  top: 50%;
  transform: translateY(-50%);

  .scroll-btn {
    padding: 0 2px;
    border: none;
  }

  .scrollbar-content {
    display: flex;
    width: fit-content;
    max-width: 100%;
    gap: 15px;

    .tab-item {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 14px;
      border-radius: 3px;
      padding: 0 10px;
      white-space: nowrap;
      line-height: 32px;
      position: relative;

      .close-btn {
        margin-left: 5px;
        visibility: hidden;
      }

      .btn-underline {
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 0;
        height: 3px;
        border-radius: 3px;
        background: linear-gradient(90deg, #4dabf7, #339af0);
        transition: width 0.5s cubic-bezier(0.65, 0, 0.35, 1);
      }

      &:hover {
        color: var(--ep-color-primary);
        background-color: var(--ep-color-primary-light-9);
        cursor: pointer;

        .btn-underline {
          width: 100%;
        }

        .close-btn {
          visibility: visible;

          &:hover {
            border-radius: 50%;
            color: var(--ep-bg-color-page);
            background-color: var(--ep-color-info-light-3);
          }
        }
      }
    }
    .active {
      color: var(--ep-color-primary);
      background-color: var(--ep-color-primary-light-9);
      cursor: pointer;

      .btn-underline {
        width: 100%;
      }

      .close-btn {
        visibility: visible;
      }
    }
  }

  .menu-icon {
    font-size: 16px;
    color: var(--ep-text-color-regular);
    transition: transform 0.5s cubic-bezier(0.65, 0, 0.35, 1);
  }

  .menu-icon.active {
    color: var(--ep-color-primary);
    cursor: pointer;
    transform: rotate(90deg);
  }
}

::v-deep(.ep-scrollbar__bar.is-horizontal) {
  display: none;
}
</style>
