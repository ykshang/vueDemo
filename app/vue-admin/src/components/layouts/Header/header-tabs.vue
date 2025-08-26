<script lang="ts" setup>
import { onMounted, onUnmounted, ref, watchEffect } from 'vue'
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
let observer = null
onMounted(() => {
  // 监听滚动条动态
  observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList') {
        const { clientWidth, scrollWidth } = mutation.target
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
onUnmounted(() => {
  observer.disconnect()
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
// 测试用
const menuNum = ref(10)
</script>

<template>
  <div class="tabs-container px-10px">
    <el-button
      v-show="isShowScrollBtn" :disabled="disabledLeftBtn" class="scroll-btn mr-10px"
      @click="scrollChange('left')"
    >
      <div class="i-ri:play-reverse-mini-fill" />
    </el-button>
    <el-scrollbar ref="scrollbarRef" flex-1>
      <div class="scrollbar-content">
        <div v-for="item in menuNum" :key="item" class="tab-item">
          <div i-ri-home-2-line mr-3px />
          {{ `标签${item}` }}
          <div class="close-btn">
            <div class="i-ri:close-line" />
          </div>
          <div class="btn-underline" />
        </div>
      </div>
    </el-scrollbar>
    <el-button
      v-show="isShowScrollBtn" :disabled="disabledRightBtn" class="scroll-btn ml-10px"
      @click="scrollChange('right')"
    >
      <div class="i-ri:play-mini-fill" />
    </el-button>
    <div class="mx-30px flex items-center justify-center font-size-16px">
      <el-dropdown placement="bottom-end" @visible-change="handleDropdownVisible($event)">
        <div ref="menuIconref" class="i-ri:dashboard-horizontal-fill menu-icon" />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <div class="i-ri:refresh-line mr-5px" />
              <span>刷新</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="i-ri:close-line mr-5px" />
              <span>关闭其他</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="i-ri:arrow-left-line mr-5px" />
              <span>关闭左侧</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="i-ri:arrow-right-line mr-5px" />
              <span>关闭右侧</span>
            </el-dropdown-item>
            <el-dropdown-item>
              <div class="i-ri:close-line" />
              <span>关闭全部</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
  <el-button style="position: relative; top: 20px; z-index: 1111111111111;" @click="menuNum++">
    新增标签
  </el-button>
  <el-button style="position: relative; top: 20px; z-index: 1111111111111;" @click="menuNum--">
    减少标签
  </el-button>
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
            color: #fff;
            background-color: gray;
          }
        }
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
