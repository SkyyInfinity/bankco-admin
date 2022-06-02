<template>
  <div class="account-card-container">
    <div v-for="account in accounts" :key="account.id" class="account-card">
      <!--  Account ID -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">ID</label>
        </div>
        <div class="account-card-content">
          <p class="card-value account-card-content__id">{{ account.id }}</p>
        </div>
      </div>
      <!--  Client ID -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">Numéro client</label>
        </div>
        <div class="account-card-content">
          <p class="card-value account-card-content__client-number"><mark title="Copier le texte" @click="copyText">{{ account.client }}</mark></p>
        </div>
      </div>
      <!--  Account number -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">Numéro de compte</label>
        </div>
        <div class="account-card-content">
          <p class="card-value account-card-content__account-number"><mark title="Copier le texte" @click="copyText">{{ account.number }}</mark></p>
        </div>
      </div>
      <!--  Account Balance -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">Montant actuel</label>
        </div>
        <div class="account-card-content">
          <p :title="account.balance.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ' ').replaceAll('.', ',') + ' euros'" :class="account.balance <= 0 ? 'card-value account-card-content__balance negative' : 'card-value account-card-content__balance positive'">{{ account.balance.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ' ').replaceAll('.', ',') }} €</p>
        </div>
      </div>
      <!--  Created At -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">Date de création</label>
        </div>
        <div class="account-card-content">
          <p class="card-value account-card-content__name">{{ account.createdAt }}</p>
        </div>
      </div>
      <!--  Action -->
      <div class="account-card-column">
        <div class="account-card-header">
          <label class="card-label">Action</label>
        </div>
        <div class="account-card-content">
          <ButtonComponent @click="openModal(account.id, account.number)" color="secondary" title="Effectuer une transaction" iconClass="ri-arrow-left-right-line"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "AccountListComponent",
  components: {
    ButtonComponent
  },
  data() {
    return {
      accounts: [
        {
          id: 1,
          client: 10551486994,
          number: 'CHQ-51684533165',
          type: 'CHQ',
          balance: -65.08,
          autorizedDebt: 150,
          createdAt: '22/05/12'
        },
        {
          id: 2,
          client: 98745632152,
          number: 'LA-89235478965',
          type: 'LA',
          balance: 300,
          autorizedDebt: 0,
          createdAt: '13/01/06'
        }
      ]
    }
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
    },
    openModal(id, accountNumber) {
      console.log(id);
      console.log(accountNumber);
    }
  }
}
</script>

<style lang="scss" scoped>
  .account-card-container {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .account-card {
    border-bottom: 5px solid rgba(var(--c-primary-rgb), 0.6);
    border-radius: 8px 8px 0 0;
    overflow: hidden;
    background-color: var(--c-secondary-shade);
    display: flex;

    .account-card-column {
      flex: 1;

      .account-card-header {
        background-color: var(--c-secondary-shade);
        padding: 16px;
        border-bottom: 1px solid var(--c-border);
        display: flex;
        align-items: center;
        gap: 32px;

        .card-label {
          text-transform: uppercase;
          font-size: 12px;
          font-weight: bold;
          margin-right: 8px;
        }
      }
      .account-card-content {
        padding: 16px;
        height: 100%;
        background-color: var(--c-secondary-lighter);

        .card-value {

        }
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
    }
  }
  .account-card-content__balance {
    font-size: 28px;
    cursor: default;

    &.positive {
      color: var(--c-success) !important;
    }
    &.negative {
      color: var(--c-error) !important;
    }
  }

  @media screen and (max-width: 1250px) {
    .account-card {
      flex-direction: column;
    }
    .account-card-column {
      display: flex;

      .account-card-header,
      .account-card-content {
        flex: 1;
      }
    }
  }
  @media screen and (max-width: 768px) {
    .account-card-column {
      flex-direction: column;
    }
  }
</style>
