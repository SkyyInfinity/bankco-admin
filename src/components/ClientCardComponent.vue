<template>
  <div class="client-card">
    <!--  Client ID -->
    <div class="client-card-column">
      <div class="client-card-header">
        <label class="card-label">ID</label>
      </div>
      <div class="client-card-content">
        <p class="card-value client-card-header__number">{{ client.id }}</p>
      </div>
    </div>
    <!--  Client number -->
    <div class="client-card-column">
      <div class="client-card-header">
        <label class="card-label">Numéro de client</label>
      </div>
      <div class="client-card-content">
        <p class="card-value client-card-header__number"><mark title="Copier le texte" @click="copyText">{{ client.clientNumber }}</mark></p>
      </div>
    </div>
    <!--  Client name -->
    <div class="client-card-column">
      <div class="client-card-header">
        <label class="card-label">Nom du client</label>
      </div>
      <div class="client-card-content">
        <p class="client-card-header__name">{{ client.title }} {{ client.firstName }} {{ client.lastName }}</p>
      </div>
    </div>
    <!--  Account count -->
    <div class="client-card-column">
      <div class="client-card-header">
        <label class="card-label">Nombre de compte</label>
      </div>
      <div class="client-card-content">
        <p class="client-card-header__name">{{ client.numberOfAccount }}</p>
      </div>
    </div>
    <!--  Action -->
    <div class="client-card-column">
      <div class="client-card-header">
        <label class="card-label">Action</label>
      </div>
      <div class="client-card-content">
        <ButtonComponent :url="`/clients/${client.clientNumber}`" color="secondary" title="Voir le client" iconClass="ri-eye-line"/>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "ClientCardComponent",
  components: {
    ButtonComponent
  },
  props: {
    client: Object
  },
  methods: {
    /**
     * @description Copy text from an HTML element
     * @param el HTML element
     */
    copyText(el) {
      const TEXT = el.target.innerText;

      if(el.target.innerText !== 'Copié !') {

        navigator.clipboard.writeText(TEXT)
        .then(() => {
          if(el.target.innerText !== 'Copié !') {
            el.target.innerHTML = '';
            el.target.innerText = 'Copié !';

            setTimeout(function() {
              el.target.innerText = TEXT;
            }, 1500);
          }

        })
        .catch(err => {
          console.log('Something went wrong', err);
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .client-card {
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--c-secondary-shade);
    display: flex;

    .client-card-column {
      flex: 1;
    }
    .card-label {
      text-transform: uppercase;
      font-size: 12px;
      font-weight: bold;
      margin-right: 8px;
    }
    mark {
      padding: 4px 16px;
      background-color: var(--c-secondary);
      border-radius: 4px;
      color: var(--c-text-shade);
      cursor: pointer;
      transition: var(--a-transition);

      &:hover {
        background-color: var(--c-secondary-shade);
      }
    }
    p {
      color: var(--c-text-shade);

      span {
        color: var(--c-text);
      }
    }
    .client-card-header {
      background-color: var(--c-secondary-shade);
      padding: 16px;
      border-bottom: 1px solid var(--c-border);
      display: flex;
      align-items: center;
      gap: 32px;
    }
    .client-card-content {
      padding: 16px;
      height: 100%;
      background-color: var(--c-secondary-lighter);
    }
  }
</style>