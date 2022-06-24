<template>
  <header id="l-header">
    <nav>
      <div class="logo">
        <router-link to="/">
          <img src="@/assets/img/bankco-logo-black.svg" alt="logo du site">
        </router-link>
      </div>
      <ul class="optional-links">
        <li>
          <ButtonComponent title="Profil" color="secondary" class="profile-btn" url="/profile" icon-class="ri-user-line"></ButtonComponent>
        </li>
        <li class="logout-item">
          <ButtonComponent title="Déconnexion" color="secondary" class="logout-btn" url="/logout" icon-class="ri-logout-circle-line"></ButtonComponent>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "HeaderComponent",
  components: {
    ButtonComponent
  }
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
        img {
          width: 150px;
        }
      }
      ul.optional-links {
        display: flex;
        gap: 16px;

        li {
          a {
            background: var(--c-tertiary);
            color: var(--c-background);

            &:hover {
              background: var(--c-tertiary-shade);
            }
          }
        }
      }
    }
  }
</style>
