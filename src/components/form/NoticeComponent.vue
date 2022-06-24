<template>
  <span v-if="mode === 'success'" class="notice notice-success">
    <i class="ri-checkbox-circle-line"></i>
    <slot></slot>
  </span>
  <span v-else-if="mode === 'info'" class="notice notice-info">
    <i class="ri-information-line"></i>
    <slot></slot>
  </span>
  <span v-else-if="mode === 'error'" class="notice notice-error">
    <i class="ri-error-warning-line"></i>
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: "NoticeComponent",
  props: {
    mode: {
      type: String,
      default: 'success'
    }
  }
}
</script>

<style lang="scss" scoped>
  .notice {
    padding: 8px 16px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-radius: 4px;
    border: 1px solid;
    pointer-events: none;

    &.notice-success {
      background-color: rgba(var(--c-success-rgb), 0.2);
      color: var(--c-success);
      border-color: var(--c-success);
    }
    &.notice-info {
      background-color: rgba(var(--c-info-rgb), 0.2);
      color: var(--c-info);
      border-color: var(--c-info);
    }
    &.notice-error {
      background-color: rgba(var(--c-error-rgb), 0.2);
      color: var(--c-error);
      border-color: var(--c-error);
    }
  }
</style>
