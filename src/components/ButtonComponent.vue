<template>
  <button :disabled="disabled === true" class="button" v-if="url === undefined"><slot/><i v-if="iconClass" :class="iconClass"></i></button>
  <router-link :disabled="disabled === true" class="button" v-else :to="url"><slot/><i v-if="iconClass" :class="iconClass"></i></router-link>
</template>

<script>
// HOW TO USE:  <ButtonComponent url="/" icon-class="ri-arrow-right-line" :disabled="false">Example</ButtonComponent>

export default {
  name: "ButtonComponent",
  props: {
    url: String,
    iconClass: String,
    disabled: Boolean
  },
  data() {
    return {}
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
    background-color: var(--c-primary);
    color: var(--c-secondary);
    font-weight: normal;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: var(--a-transition);

    &:hover {
      background-color: #fff;
    }
    &[disabled=true] {
      background-color: #888;
      pointer-events: none;
      cursor: not-allowed;
    }

    i {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      transition: var(--a-transition);
    }
  }
</style>
