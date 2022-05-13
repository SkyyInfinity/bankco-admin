<template>
  <div class="page about-page">
    <h1>Liste des clients</h1>
    <div class="box clients-list">
      <div class="clients-cards">
        <ClientCardComponent v-for="client in clients" :key="client.id" :client="client" />
      </div>
    </div>
  </div>
</template>

<script>
import ClientCardComponent from "@/components/ClientCardComponent";

export default {
  name: 'ClientsView',
  components: {
    ClientCardComponent
  },
  data() {
    return {
      clients: [
        {
          id: 1,
          title: 'Mr',
          clientNumber: 10551486994,
          firstName: 'Tony',
          lastName: 'Stark',
          numberOfAccount: 2
        },
        {
          id: 2,
          title: 'Mme',
          clientNumber: 32412245785,
          firstName: 'Natasha',
          lastName: 'Roumanoff',
          numberOfAccount: 2
        },
        {
          id: 3,
          title: 'Mr',
          clientNumber: 53475444517,
          firstName: 'Bruce',
          lastName: 'Banner',
          numberOfAccount: 2
        },
        {
          id: 4,
          title: 'Mr',
          clientNumber: 79964376169,
          firstName: 'Steven',
          lastName: 'Strange',
          numberOfAccount: 2
        },
        {
          id: 5,
          title: 'Mr',
          clientNumber: 45131479626,
          firstName: 'Jean-Marie',
          lastName: 'Bigard',
          numberOfAccount: 2
        },
        {
          id: 6,
          title: 'Mr',
          clientNumber: 12679976475,
          firstName: 'Emmanuel',
          lastName: 'Macron',
          numberOfAccount: 2
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .clients-cards {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  @media screen and (max-width: 768px) {
    .clients-cards {
      gap: 32px;
    }
  }
</style>
