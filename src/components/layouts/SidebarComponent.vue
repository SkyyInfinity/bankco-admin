<template>
  <aside id="l-sidebar">
    <div class="menu-links">
      <ul>
        <li><router-link to="/" title="Home"><i class="ri-home-4-line"></i><span class="nav-label">Home</span></router-link></li>
        <li><router-link to="/clients" title="About"><i class="ri-user-settings-line"></i><span class="nav-label">Liste des clients</span></router-link></li>
      </ul>
    </div>
    <div class="optional-links">
      <ul>
        <li class="logout-item">
          <ButtonComponent title="Déconnexion" class="logout-btn" url="/" icon-class="ri-logout-circle-line"><span class="nav-label">Déconnexion</span></ButtonComponent>
        </li>
        <li>
          <ButtonComponent @click="toggleMenu" class="icon-only menu-control" icon-class="ri-arrow-left-line"/>
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
  },
  data() {
    return {
      isOpen: false,
    }
  },
  mounted() {
    // If menu is open, else menu is close
    this.isOpen ? this.openMenu() : this.closeMenu();
  },
  methods: {
    /**
     * @description Open the sidebar menu
     */
    openMenu() {
      // Variables
      const APP = document.getElementById('app');
      const SIDEBAR = document.getElementById('l-sidebar');
      const BUTTON = document.querySelector('.menu-control');
      const ICON = BUTTON.querySelector('i');

      // Code
      this.isOpen = true;
      APP.classList.add('menu-is-opened');
      SIDEBAR.classList.add('is-opened');
      BUTTON.setAttribute('title', 'Fermer');
      ICON.classList.remove('ri-arrow-right-line');
      ICON.classList.add('ri-arrow-left-line');
    },
    /**
     * @description Close the sidebar menu
     */
    closeMenu() {
      // Variables
      const APP = document.getElementById('app');
      const SIDEBAR = document.getElementById('l-sidebar');
      const BUTTON = document.querySelector('.menu-control');
      const ICON = BUTTON.querySelector('i');

      // Code
      this.isOpen = false;
      APP.classList.remove('menu-is-opened');
      SIDEBAR.classList.remove('is-opened');
      BUTTON.setAttribute('title', 'Ouvrir');
      ICON.classList.remove('ri-arrow-left-line');
      ICON.classList.add('ri-arrow-right-line');
    },
    /**
     * @description Open or close the sidebar menu according to value of isOpen
     */
    toggleMenu(el) {
      el.preventDefault();
      // If menu is open, else menu is close
      this.isOpen ? this.closeMenu() : this.openMenu();
    }
  }
}
</script>

<style lang="scss" scoped>
  #l-sidebar {
    position: fixed;
    height: calc(100vh - var(--s-header));
    bottom: 0;
    left: 0;
    z-index: 99;
    grid-area: sidebar;
    padding: 32px;
    background-color: var(--c-secondary);
    border-right: 1px solid var(--c-border);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
    box-shadow: 6px 0 35px 0 rgba(35, 35, 80, 0.3);

    &:not(.is-opened) {
      .nav-label {
        display: none;
      }
      .menu-links ul li a {
        justify-content: center;
      }
      .optional-links {
        ul {
          flex-direction: column;

          li {
            .logout-btn {
              width: max-content;
              justify-content: flex-start;
            }
          }
        }
      }
    }
    &.is-opened {
      .icon-only {
        background-color: var(--c-tertiary);
      }
    }
    .menu-links {
      ul li a {
        padding: 8px 16px;
        background-color: transparent;
        border-radius: 8px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
        text-transform: uppercase;
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: flex-start;

        &.router-link-active {
          background-color: var(--c-background);
        }
      }
    }
    .optional-links {
      ul {
        display: flex;
        flex-direction: row-reverse;
        gap: 8px;

        li {
          &.logout-item {
            flex: 1;
          }

          .icon-only {
            border: none;
            height: 40px;
          }
          .logout-btn {
            width: 100%;
            justify-content: center;
          }
        }
      }
    }
  }
</style>
