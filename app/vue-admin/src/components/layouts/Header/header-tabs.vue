<script lang="ts" setup>
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
    <el-button text bg mr-10px style="padding: 0;">
      <div class="i-ri:arrow-left-s-fill" />
    </el-button>
    <el-scrollbar always flex-1>
      <div class="scrollbar-content">
        <div v-for="item in 50" :key="item" class="tab-item">
          <div i-ri-home-2-line mr-3px />
          {{ `标签${item}` }}
          <div class="close-btn">
            <div class="i-ri:close-line" />
          </div>
          <div class="btn-underline" />
        </div>
      </div>
    </el-scrollbar>
    <el-button text bg style="padding: 0;" ml-10px>
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
