<template>
  <div mr-16px flex items-center justify-center>
    <div class="icons">
      <div i-ri-brush-3-line class="icon" />
    </div>
    <div class="icons">
      <el-badge :value="3" class="item">
        <div i-ep-bell class="icon" />
      </el-badge>
    </div>
    <div class="icons">
      <div i-ri-brush-3-line class="icon" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.icons {
  margin-right: 8px;
  margin-left: 7px;

  .icon {
    color: var(--ep-text-color-regular);
    font-size: 16px;
    font-weight: 400;

    &:hover {
      cursor: pointer;
      color: var(--ep-color-primary);
      animation: rubberBand 0.5s both;
    }
  }
}
</style>
