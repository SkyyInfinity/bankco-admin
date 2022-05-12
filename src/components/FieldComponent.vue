<template>
  <div class="field">
    <label :for="name ? name : 'input'">{{ name }}</label>
    <input v-if="type !== 'textarea'" :id="name ? name : 'input'" :type="type ? type : 'text'" :value="value">
    <textarea v-if="type === 'textarea'" :id="name ? name : 'input'"></textarea>
  </div>
</template>

<script>
/**
 * @HowToUse
 * <FieldComponent type="text" name="adresse e-mail" value="user@example.com"/>
 */

export default {
  name: "FieldComponent",
  props: {
    type: String,
    name: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
  .field {
    display: flex;
    flex-direction: column;
    gap: 4px;

    label {
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      cursor: pointer;
    }
    input, textarea {
      //reset
      outline: none;
      box-shadow: none;
      width: 100%;

      //style
      padding: 8px 16px;
      border-radius: 8px;
      background-color: var(--c-secondary-lighter);
      color: var(--c-text-shade);
      border: 1px solid var(--c-border);
      transition: var(--a-transition);

      &:focus {
        //box-shadow: 0 0 0 3px rgba(var(--c-primary-rgb), 0.3);
        border-color: var(--c-primary);
        color: var(--c-tertiary);
      }
    }
    textarea {
      height: 350px;
      resize: vertical;
    }
  }
</style>
