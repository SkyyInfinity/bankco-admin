<template>
  <div class="modal">
    <div @click="closeModal" class="modal-overlay"></div>
    <div class="modal-container">
      <div class="modal-title">
        <h2>{{ title }}</h2>
        <div @click="closeModal" title="Fermer" class="modal-close">
          <i class="ri-close-line"></i>
        </div>
      </div>
      <div class="modal-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    title: {
      required: false,
      type: String
    },
    closeModal: {
      required: true,
      type: Function
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    position: fixed;
    inset: 0;
    z-index: 5;

    .modal-overlay {
      background-color: rgba(0, 0, 0, 0.5);
      width: 100vw;
      height: 100vh;
      transition: var(--a-transition);
    }
    .modal-container {
      width: 100%;
      max-width: 720px;
      position: absolute;
      z-index: 5;
      background-color: var(--c-secondary);
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 16px;
      overflow: hidden;
      transition: var(--a-transition);

      .modal-title {
        position: relative;
        padding: 16px;
        background-color: var(--c-primary);

        h2 {
          margin: 0 !important;
          color: var(--c-secondary) !important;
        }
        .modal-close {
          position: absolute;
          cursor: pointer;
          top: 0;
          right: 0;
          background-color: var(--c-tertiary);
          width: 32px;
          height: 32px;
          border-radius: 0 0 0 50%;
          color: var(--c-secondary-shade);
          transition: background-color var(--a-transition);

          &:hover {
            background-color: var(--c-tertiary-shade);
          }

          i {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
        }
      }
      .modal-content {
        padding: 16px;
      }
    }
  }
</style>