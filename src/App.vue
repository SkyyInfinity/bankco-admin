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
    --s-sidebar: calc(48px + 64px);
    min-height: 100vh;
    background-color: var(--c-background);
    color: var(--c-tertiary);
    font-size: 14px;
    font-family: "Sora", system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans-serif;
    display: grid;
    grid-auto-columns: var(--s-sidebar) 1fr;
    grid-template-rows: max-content 1fr;
    grid-template-areas: "header header" "sidebar content" "sidebar footer";

    &.menu-is-opened {
      --s-sidebar: 300px;
    }
  }
  #l-content {
    grid-area: content;
    padding: 32px;
    padding-top: calc(32px + var(--s-header));
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
  i[class*="ri"] {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    transition: var(--a-transition);
  }
  h1 {
    width: max-content;
    position: relative;
    font-size: 32px !important;
    font-weight: bold !important;
    margin-bottom: 32px !important;
    padding-bottom: 16px !important;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      background-color: var(--c-primary);
      width: 20%;
      height: 8px;
    }
  }
  h2 {
    width: max-content;
    font-size: 24px !important;
    font-weight: bold !important;
    margin-bottom: 16px !important;
    color: var(--c-tertiary) !important;
  }
  .box {
    width: 100%;
    background-color: var(--c-secondary);
    border-radius: 16px;
    padding: 32px;
  }
  .field-groups {
    display: flex;
    gap: 16px;

    .field {
      flex: 1;
    }
  }

  @media screen and (max-width: 768px) {
    .field-groups {
      flex-direction: column;
    }
  }
</style>
