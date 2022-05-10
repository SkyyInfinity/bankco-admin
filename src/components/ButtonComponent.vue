<template>
  <button class="button" v-if="url === undefined"><slot/></button>
  <router-link class="button" v-else :to="url"><slot/></router-link>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    url: String
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
  .button {
    padding: 16px 32px;
    display: block;
    width: max-content;
    border-radius: 8px;
  }
</style>
