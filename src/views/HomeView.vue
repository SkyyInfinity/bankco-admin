<template>
  <div class="page home-page">
    <h1>{{ welcomeText }} {{ user.firstName }},</h1>
    <div data-aos="fade-up" class="box clients-list">
      <h2>Nouveaux clients</h2>
      <div class="clients-cards">
        <div class="overlay"></div>
        <ClientCardComponent v-for="client in clients" :key="client.id" :client="client" />
      </div>
      <ButtonComponent class="view-all" url="/clients">Voir tous les clients</ButtonComponent>
    </div>
  </div>
</template>

<script>
import ClientCardComponent from "@/components/ClientCardComponent";
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: 'HomeView',
  components: {
    ClientCardComponent,
    ButtonComponent
  },
  data() {
    return {
      welcomeText: 'Bonjour',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
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
          numberOfAccount: 1
        },
        {
          id: 3,
          title: 'Mr',
          clientNumber: 53475444517,
          firstName: 'Bruce',
          lastName: 'Banner',
          numberOfAccount: 3
        }
      ]
    }
  },
  mounted() {
    this.isDayOrNight();
  },
  methods: {
    /**
     * Determine if it's day or night and assign that value to welcomeText
     */
    isDayOrNight() {
      // Variables
      const HOURS = new Date().getHours()
      const IS_DAY_TIME = HOURS > 6 && HOURS < 20;

      IS_DAY_TIME ? this.welcomeText = 'Bonjour' : this.welcomeText = 'Bonsoir';
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

    .overlay {
      position: absolute;
      width: 100%;
      height: 60%;
      pointer-events: none;
      bottom: 0;
      left: 0;
      z-index: 15;
      background-image: linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 100%);
    }
  }
  .view-all {
    width: 100%;
    justify-content: center;
    margin-top: 16px;
  }
</style>
