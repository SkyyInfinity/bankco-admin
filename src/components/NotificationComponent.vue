<template>
  <div class="notification-container">
    <div class="notification-icon">
      <i class="ri-notification-3-line"></i>
    </div>
    <div class="notification-text">
      <p><strong>{{ client.firstName }} {{ client.lastName }}</strong> <slot/></p>
      <div class="labels">
        <span class="notification-label">{{ label }}</span>
        •
        <span class="notification-label__client">{{ date.getDay() <= 9 ? '0' + date.getDay() : date.getDay() }}/{{ date.getMonth() <= 9 ? '0' + date.getMonth() : date.getMonth() }}/{{ date.getFullYear() }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NotificationComponent",
  props: {
    label: String,
    client: Object,
    date: Date
  }
}
</script>

<style lang="scss" scoped>
  .notification-container {
    padding: 16px 32px;
    border-radius: 8px;
    display: flex;
    gap: 16px;
    background-color: var(--c-secondary-lighter);
    border: 1px solid var(--c-border);
    .notification-icon {
      i {
        margin: 8px 12px;
        position: relative;
        color: var(--c-background);

        &::before {
          z-index: 2;
        }
        &::after {
          position: absolute;
          content: '';
          width: 38px;
          height: 38px;
          background-color: var(--c-primary);
          border-radius: 50%;
          z-index: 1;
        }
      }
    }
    .notification-text {
      flex: 1;

      .labels {
        display: flex;
        align-items: center;
        gap: 16px;
        margin-top: 5px;

        .notification-label {
          display: block;
          font-size: 12px;
          color: var(--c-tertiary-shade);
        }
        .notification-label__client {
          display: block;
          font-size: 12px;
          color: var(--c-tertiary-shade);
        }
      }
      p {
        strong {
          font-weight: bold;
        }
      }
    }
  }
</style>
