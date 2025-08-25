<template>
  <div mr-10px flex items-center justify-center>
    <div i-ri-brush-3-line class="icons " />
    <div i-ep-bell class="icons " />
    <div i-ri-brush-3-line class="icons " />
  </div>
</template>

<style lang="scss" scoped>
.icons {
  margin-right: 7px;
  margin-left: 7px;
  font-size: 16px;
  font-weight: 400;
  color: var(--ep-text-color-regular);

  &:hover {
    cursor: pointer;
    color: var(--ep-text-color-secondary);
    animation: rubberBand 0.5s both;
  }
}
</style>
