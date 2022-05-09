<template>
  <HeaderComponent/>
  <SidebarComponent/>
  <main id="l-content">
    <router-view/>
  </main>
  <FooterComponent/>
</template>

<script>
import HeaderComponent from "@/components/layouts/HeaderComponent";
import FooterComponent from "@/components/layouts/FooterComponent";
import SidebarComponent from "@/components/layouts/SidebarComponent";

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    SidebarComponent
  }
}
</script>

<style lang="scss">
/* Importation =========================== */
@import "assets/css/reset.min.css";

/* Variables =========================== */
@import "assets/css/variables.css";

/* Globals =========================== */
#app {
  background-color: var(--c-background);
  color: var(--c-tertiary);
}
#l-content {
  padding: 32px;
}
a {
  display: block;
  text-decoration: none;
  color: var(--c-primary);

  &:not([class]):hover {
    text-decoration: underline;
  }
}
li {
  list-style: none;
}
h1, h2, h3, h4, h5, h6 {
  color: var(--c-text);
}
</style>
