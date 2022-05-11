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
        <li>
          <ButtonComponent url="/" icon-class="ri-logout-circle-line" :disabled="false">Déconnexion</ButtonComponent>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: "SidebarComponent",
  components: {
    ButtonComponent
  }
}
</script>

<style lang="scss" scoped>
  #l-sidebar {
    padding: 32px;
    background-color: var(--c-secondary);
    border-right: 1px solid var(--c-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .menu-links {
      ul li a {
        padding: 8px 16px;
        background-color: transparent;
        border-radius: 8px;
        color: #fff;
        font-size: 12px;
        text-transform: uppercase;

        &.router-link-active {
          background-color: var(--c-background);
        }
      }
    }
  }
</style>
