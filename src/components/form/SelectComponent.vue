<template>
  <div class="field">
    <select name="name" id="name">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.label }}</option>
    </select>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  name: "SelectComponent",
  props: {
    options: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.field {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 4px;

  select {
    //reset
    outline: none;
    box-shadow: none;
    width: 100%;
    border: none;

    //style
    padding: 8px 0;
    background-color: transparent;
    color: var(--c-placeholder);
    border-bottom: 1px solid var(--c-placeholder);
    transition: var(--a-transition);

    &::placeholder {
      color: var(--c-placeholder);
      transition: var(--a-transition);
    }
    &:hover {
      border-color: #9f9f9f;
      color: var(--c-tertiary);

      &::placeholder {
        color: var(--c-tertiary);
      }
    }
    &:focus {
      color: var(--c-tertiary);

      &::placeholder {
        color: var(--c-tertiary);
      }
      &~ .line {
        transform: scaleX(1);
      }
    }
    &[disabled] {
      opacity: 0.6;
      pointer-events: none;
      cursor: not-allowed;
    }
    option {
      background-color: var(--c-secondary-shade);
    }
  }
  .line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: var(--c-primary);
    transform: scaleX(0);
    transform-origin: left;
    transition: var(--a-transition);
  }
}
</style>