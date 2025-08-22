<template>
  <section class="admin-card">
    <div class="admin-card-title">
      <slot name="title" />
    </div>
    <div class="admin-card-content">
      <slot name="content" />
    </div>
    <div class="admin-card-footer">
      <slot name="footer" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.admin-card {
  box-sizing: border-box;
  font-size: 14px;
  line-height: 2;
  color: var(--ep-text-color-primary);
  background-color: var(--ep-bg-color);
  padding: 20px 20px 30px 20px;
  transition: var(--ep-transition-duration);
  overflow: hidden;
  text-align: left;
  border: 1px solid var(--ep-color-info-light-7);
  border-radius: 3px;

  &:hover {
    box-shadow: 0 0 3px var(--ep-color-info-light-3);
  }
  .admin-card-title {
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    color: var(--ep-text-color-primary);
  }
  .admin-card-content {
    vertical-align: middle;
  }
}
</style>
