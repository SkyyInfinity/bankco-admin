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
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@100;300;400;500;700;800&display=swap');
@import "assets/css/reset.min.css";
@import "assets/css/variables.css";

/* Globals =========================== */
#app {
  background-color: var(--c-background);
  color: var(--c-tertiary);
  font-size: 14px;
  font-family: "Sora", system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif;
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
