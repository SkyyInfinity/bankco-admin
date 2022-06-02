<template>
  <aside id="l-sidebar">
    <div class="menu-links">
      <ul>
        <li><router-link to="/" title="Accueil"><i class="ri-home-4-line"></i><span class="nav-label">Accueil</span></router-link></li>
        <li><router-link to="/clients" title="Liste des clients"><i class="ri-user-settings-line"></i><span class="nav-label">Liste des clients</span></router-link></li>
        <li><router-link to="/notifications" title="Notifications"><i class="ri-notification-3-line"></i><span class="nav-label">Notifications</span></router-link></li>
      </ul>
    </div>
    <div class="optional-links">
      <ul>
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
        i {
          font-weight: normal;
        }
      }
    }
    .optional-links {
      ul {
        display: flex;
        gap: 8px;

        li {

          .icon-only {
            border: none;
            height: 40px;
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    #l-sidebar {
      padding: 16px 32px;
      width: 100%;
      height: max-content;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      gap: 8px;

      .menu-links,
      .optional-links {
        ul {
          display: flex;
          flex-direction: row !important;
          gap: 8px;
        }
      }
      .menu-control {
        display: none;
      }
    }
  }
</style>
