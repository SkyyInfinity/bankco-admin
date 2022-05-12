<template>
  <footer id="l-footer">
   <p class="copyright">&copy; Copyright 2022 | Tous droits réservés à <router-link to="/">Bankco</router-link></p>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent"
}
</script>

<style lang="scss" scoped>
  #l-footer {
    grid-area: footer;
    padding: 16px;
    background-color: var(--c-background);
    border-top: 1px solid var(--c-border);
    border-right: 1px solid var(--c-border);

    .copyright {
      text-align: center;
      color: var(--c-text-shade);
      font-size: 12px;

      a {
        display: inline;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
</style>
