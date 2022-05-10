<template>
  <header id="l-header">
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/logo.png" alt="logo">
        </router-link>
      </div>
      <ul>
        <li><a href="#">Mon compte</a></li>
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
    padding: 32px;
    background-color: var(--c-background);
    border-bottom: 1px solid var(--c-border);

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 8px;

      .logo {
        width: 64px
      }
    }
  }
</style>
