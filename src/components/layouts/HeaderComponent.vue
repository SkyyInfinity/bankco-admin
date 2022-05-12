<template>
  <header id="l-header">
    <nav>
      <div class="logo">
        <router-link to="/">
          <h2>Bankco</h2>
        </router-link>
      </div>
      <ul>
        <li><router-link to="/profile"><i class="ri-user-line"></i></router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderComponent"
}
</script>

<style lang="scss" scoped>
  #l-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: max-content;
    z-index: 99;
    grid-area: header;
    padding: 16px 32px;
    background-color: var(--c-primary);
    border-bottom: 1px solid var(--c-border);
    box-shadow: 0 6px 35px 0 rgba(35, 35, 80, 0.3);

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;

      .logo {
        //width: 64px
        h2 {
          margin: 0 !important;
          color: #000 !important;
        }
      }
      ul li a {
        color: var(--c-text-alt);
      }
    }
  }
</style>
