<template>
  <div class="field">
    <textarea v-if="type === 'textarea'" name="" :id="name ? name : 'input'" :placeholder="text" :disabled="disabled === true"></textarea>

    <input v-else-if="type === 'password'" :id="name ? name : 'input'" class="password-field" type="password" :value="value" :placeholder="text" :disabled="disabled === true">

    <input v-else-if="type === 'tel'" :id="name ? name : 'input'" type="tel" :value="value" :placeholder="text" pattern="^[0-9]{10}$" size="10" :disabled="disabled === true">

    <input v-else :id="name ? name : 'input'" :type="type ? type : 'text'" :value="value" :placeholder="text" :disabled="disabled === true">

    <ButtonComponent @click="togglePasswordVisibility" class="show-password" v-if="type === 'password'" color="secondary" iconClass="ri-eye-line"/>

    <div class="line"></div>
  </div>
</template>

<script>
/**
 * @HowToUse
 * <FieldComponent type="text" name="adresse e-mail" value="user@example.com"/>
 */

import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "FieldComponent",
  components: {
    ButtonComponent
  },

  props: {
    type: String,
    name: String,
    value: String,
    disabled: Boolean,
    text: String
  },
  methods: {
    togglePasswordVisibility(el) {
      el.preventDefault();

      const PASSWORD_INPUT = document.querySelector('.password-field');
      const TOGGLE_BUTTON = el.target;

      if(TOGGLE_BUTTON.classList.contains('ri-eye-line')) {
        PASSWORD_INPUT.setAttribute('type', 'text');
        TOGGLE_BUTTON.classList.remove('ri-eye-line');
        TOGGLE_BUTTON.classList.add('ri-eye-off-line');
      } else {
        PASSWORD_INPUT.setAttribute('type', 'password');
        TOGGLE_BUTTON.classList.remove('ri-eye-off-line');
        TOGGLE_BUTTON.classList.add('ri-eye-line');
      }
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

    input, textarea {
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

      &::-webkit-calendar-picker-indicator {
        filter: invert(1);
      }
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

    textarea {
      height: 350px;
      resize: vertical;
    }
    .password-field {
      position: relative;
      padding-right: calc(16px * 2);
    }
    .show-password {
      position: absolute;
      top: calc(50% - 1px);
      right: 0;
      transform: translateY(-50%);
      border: 0;
      background-color: transparent !important;
      padding: 0 !important;
      color: var(--c-placeholder);

      &:hover {
        background-color: transparent !important;
        color: var(--c-tertiary);
      }
    }
  }
</style>
