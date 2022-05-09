<template>
  <aside id="l-sidebar">
    <div class="menu-links">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </div>
    <div class="optional-links">
      <ul>
        <li><a href="#">Déconnexion</a></li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SidebarComponent"
}
</script>

<style lang="scss" scoped>
  #l-sidebar {
    padding: 32px;
    background-color: var(--c-background);
    border-right: 1px solid var(--c-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>