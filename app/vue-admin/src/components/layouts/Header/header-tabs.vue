<script lang="ts" setup>
// import { useScroll } from '@vueuse/core'
import { computed, onMounted, ref } from 'vue'

const scrollbarRef = ref<any>()
const currPosition = ref(0)
const maxLeftPosition = ref(0)
onMounted(() => {
  // 动态滚动条的的最大滚动距离，距离左侧的值
  maxLeftPosition.value = scrollbarRef.value.wrapRef.scrollWidth - scrollbarRef.value.wrapRef.clientWidth
})

function scrollChange(direction: 'left' | 'right') {
  if (direction === 'left') {
    currPosition.value -= 200
    scrollbarRef.value!.setScrollLeft(currPosition.value as number)
  } else {
    currPosition.value += 200
    scrollbarRef.value!.setScrollLeft(currPosition.value as number)
  }
}

// 动态计算滚动按钮是否显示
const isShowScrollBtnLeft = computed(() => {
  // 需要判断一下，保证DOM挂载完成之后，获取相关数据
  if (scrollbarRef.value && scrollbarRef.value.wrapRef && currPosition.value > 0) {
    const wrapRef = scrollbarRef?.value?.wrapRef
    return wrapRef.scrollWidth > wrapRef.clientWidth
  } else {
    return false
  }
})

const isShowScrollBtnRight = computed(() => {
  // 需要判断一下，保证DOM挂载完成之后，获取相关数据
  if (scrollbarRef.value && scrollbarRef.value.wrapRef && currPosition.value <= maxLeftPosition.value) {
    const wrapRef = scrollbarRef?.value?.wrapRef
    return wrapRef.scrollWidth > wrapRef.clientWidth
  } else {
    return false
  }
})

// const tabList = ref([
//   {
//     label: '首页',
//     path: '/',
//   },
//   {
//     label: '列表',
//     path: '/list',
//   },
// ])
</script>

<template>
  <div class="tabs-container">
    <el-button v-show="isShowScrollBtnLeft" text bg class="scroll-btn mr-10px" @click="scrollChange('left')">
      <div class="i-ri:arrow-left-s-fill" />
    </el-button>
    <el-scrollbar ref="scrollbarRef" always flex-1>
      <div class="scrollbar-content">
        <div v-for="item in 20" :key="item" class="tab-item">
          <div i-ri-home-2-line mr-3px />
          {{ `标签${item}` }}
          <div class="close-btn">
            <div class="i-ri:close-line" />
          </div>
          <div class="btn-underline" />
        </div>
      </div>
    </el-scrollbar>
    <el-button v-show="isShowScrollBtnRight" text bg class="scroll-btn ml-10px" @click="scrollChange('right')">
      <div class="i-ri:arrow-right-s-fill" />
    </el-button>
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
    padding: 0;
  }

  .scrollbar-content {
    display: flex;
    width: fit-content;
    max-width: 100%;
    gap: 25px;

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
        display: none;
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
          display: block;

          &:hover {
            border-radius: 50%;
            color: #fff;
            background-color: gray;
          }
        }
      }
    }
  }
}

::v-deep(.ep-scrollbar__bar.is-horizontal) {
  display: none;
}
</style>
