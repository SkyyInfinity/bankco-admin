<template>
  <div class="page home-page">
    <h1>{{ welcomeText }} {{ user.firstName }},</h1>
    <div class="box-contents">
      <div data-aos="fade-up" class="box clients-list">
        <h2>Nouveaux clients</h2>
        <div class="clients-cards">
          <div class="overlay"></div>
          <ClientCardComponent v-for="client in clients" :key="client.id" :client="client" />
        </div>
        <ButtonComponent class="view-all" url="/clients">Voir tous les clients</ButtonComponent>
      </div>
      <div data-aos="fade-up" class="box mailbox">
        <h2>Boite mail</h2>
        <MessageListComponent />
      </div>
    </div>
  </div>
</template>

<script>
import ClientCardComponent from "@/components/ClientCardComponent";
import ButtonComponent from "@/components/ButtonComponent";
import MessageListComponent from "@/components/MessageListComponent";
import axios from "axios";
import AuthService from "@/services/AuthService";

export default {
  name: 'HomeView',
  components: {
    ClientCardComponent,
    ButtonComponent,
    MessageListComponent
  },
  beforeMount() {
    if(!AuthService.isLoggedIn()) {
      this.$router.push('/login');
    }
  },
  created() {
    axios.get(process.env.API_URL + 'auth/banker/customers').then((res) => {
      this.clients = res.data;
      console.log(this.clients);
    }).catch((err) => {
      console.log(err);
    });
  },
  data() {
    return {
      welcomeText: 'Bonjour',
      user: {
        firstName: 'John',
        lastName: 'Doe'
      },
      clients: []
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
  .home-page {
    .box-contents {
      display: grid;
      grid-template-areas: "clients" "mailbox";
      grid-template-columns: 1fr;
      gap: 32px;

      .clients-list {
        grid-area: clients;

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
      }
      .mailbox {
        grid-area: mailbox;
      }
    }
  }

</style>
