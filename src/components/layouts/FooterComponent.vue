<template>
  <footer id="l-footer">
   <p class="copyright">&copy;Copyright 2022 | All rights reserved</p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
  #l-footer {
    padding: 16px;
    background-color: var(--c-background);
    border-top: 1px solid var(--c-border);
    border-right: 1px solid var(--c-border);

    .copyright {
      text-align: center;
      color: var(--c-text-shade);
    }
  }
</style>
