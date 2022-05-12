<template>
  <button :disabled="disabled === true" :class="color === 'primary' ? 'button btn-primary' : color === 'secondary' ? 'button btn-secondary' : 'button btn-primary'" v-if="url === undefined"><slot/><i v-if="iconClass" :class="iconClass"></i></button>
  <router-link :disabled="disabled === true" :class="color === 'primary' ? 'button btn-primary' : color === 'secondary' ? 'button btn-secondary' : 'button btn-primary'" v-else :to="url"><slot/><i v-if="iconClass" :class="iconClass"></i></router-link>
</template>

<script>
/**
 * @HowToUse
 * <ButtonComponent url="/" color="primary" icon-class="ri-arrow-right-line" :disabled="false">Example</ButtonComponent>
 */

export default {
  name: "ButtonComponent",
  props: {
    url: String,
    iconClass: String,
    disabled: Boolean,
    color: String
  }
}
</script>

<style lang="scss" scoped>
  .button {
    //reset
    cursor: pointer;
    box-shadow: none;
    outline: none;

    //style
    padding: 8px 16px;
    width: max-content;
    border-radius: 8px;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--a-transition);

    &.btn-primary {
      background-color: var(--c-primary);
      color: var(--c-secondary);
    }
    &.btn-primary:hover {
      background-color: var(--c-tertiary);
    }
    &.btn-secondary {
      background-color: var(--c-secondary);
      color: var(--c-tertiary);
    }
    &.btn-secondary:hover {
      background-color: var(--c-secondary-lighter);
    }
    &[disabled=true] {
      background-color: #888;
      pointer-events: none;
      cursor: not-allowed;
    }
  }
</style>
