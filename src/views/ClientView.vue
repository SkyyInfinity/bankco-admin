<template>
  <div class="page about-page">
    <h1>Client n°{{ client.clientNumber }}</h1>
    <div class="box-contents">
      <!--  Informations  -->
      <div data-aos="fade-up" class="box informations">
        <h2>Informations</h2>
        <div class="info-list">
          <form id="client-infos" action="" method="post">
            <div class="field-groups">
              <FieldComponent type="text" name="last-name" :value="client.lastName" text="Nom"/>
              <FieldComponent type="text" name="first-name" :value="client.firstName" text="Prénom"/>
            </div>
            <FieldComponent type="date" name="birthdate" text="Date de naissance" :value="client.birthdate" disabled/>
            <div class="field-groups">
              <FieldComponent type="email" name="email" text="Adresse e-mail" :value="client.email" disabled/>
              <FieldComponent type="tel" name="phone" text="Numéro de téléphone" :value="formatFrenchPhoneNumber(client.phone, ' ')"/>
            </div>
            <FieldComponent type="text" name="address" text="Adresse" :value="client.address"/>
            <FieldComponent type="text" name="city" text="Ville" :value="client.city"/>
            <FieldComponent type="text" name="country" text="Pays" :value="client.country"/>

            <ButtonComponent iconClass="ri-edit-line">Modifier les informations</ButtonComponent>
          </form>
        </div>
        <div class="actions">

        </div>
      </div>
      <!--  Contact  -->
      <div data-aos="fade-up" class="box contact">
        <h2>Contact</h2>
        <div class="btns-contact">
          <a :href="`tel:+33${client.phone.slice(1)}`" class="tel btn-contact" >Appeler <i class="ri-phone-line"></i></a>
          <a :href="`mailto:${client.email}`" class="mail btn-contact">Envoyer un message <i class="ri-mail-line"></i></a>
        </div>
      </div>
      <!--  Accounts  -->
      <div data-aos="fade-up" class="box accounts">
        <h2>Liste des comptes</h2>
        <div class="accounts-list">
          <AccountListComponent />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldComponent from '@/components/form/FieldComponent';
import ButtonComponent from '@/components/ButtonComponent';
import AccountListComponent from "@/components/AccountListComponent";
import AuthService from "@/services/AuthService";

export default {
  name: "ClientView",
  components: {
    FieldComponent,
    ButtonComponent,
    AccountListComponent
  },
  data() {
    return {
      client: {
        id: 6, // ok
        title: 'Mr', // ok
        clientNumber: 12679976475, // ok
        firstName: 'Emmanuel', // ok
        lastName: 'Macron', // ok
        birthdate: '08/10/1984', // ok
        email: 'user@example.com', // ok
        phone: '0656994236', // ok
        address: '37 avenue de la finance', // ok
        city: 'Lille', // ok
        country: 'France', // ok
        numberOfAccount: 2
      }
    }
  },
  beforeMount() {
    if(!AuthService.isLoggedIn()) {
      this.$router.push('/login');
    }
  },
  mounted() {
    const THIS = this;
    const PHONE_INPUT = document.getElementById('phone');

    PHONE_INPUT.addEventListener('keydown', function() {
      // Replace all spaces by empty characters
      PHONE_INPUT.value = PHONE_INPUT.value.replaceAll(" ", "");
      // Format phone input value to a French number
      PHONE_INPUT.value = THIS.formatFrenchPhoneNumber(PHONE_INPUT.value, ' ');
    });

    let id = this.$route.params.id;
    console.log(`Client ID: ${id}`);
  },
  methods: {
    formatFrenchPhoneNumber(string, separator) {
      let newValue = "";
      for (let i = 0; i < string.length; i++) {
        if ((i > 0) && (i % 2 === 0)) {
          newValue += separator;
        }
        newValue += string.charAt(i);
      }
      string = newValue;
      return newValue;
    }
  }
}
</script>

<style lang="scss" scoped>
  #client-infos {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .box-contents {
    display: grid;
    grid-template-areas:
        "info contact"
        "accounts accounts"
    ;
    gap: 32px;
  }
  .informations {
    grid-area: info;
  }
  .contact {
    display: flex;
    flex-direction: column;

    .btns-contact {
      flex: 1;
      grid-area: contact;
      display: flex;
      gap: 16px;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .btn-contact {
        padding: 16px;
        border-radius: 8px;
        width: 100%;
        max-width: 368px;
        justify-content: center;
        font-weight: bold;
        display: flex;
        align-items: center;
        gap: 8px;
        transition: var(--a-transition);
        background-color: var(--c-primary);
        color: var(--c-secondary);

        i {
          font-weight: normal;
        }
        &:hover {
          background-color: var(--c-tertiary);
        }
      }
    }
  }

  .accounts {
    flex: 1;
    grid-area: accounts;
  }

  @media screen and (max-width: 1024px) {
    #client-infos {
      button {
        width: 100%;
        justify-content: center;
      }
    }
    .box-contents {
      grid-template-areas:
        "info"
        "contact"
        "accounts";
    }
  }
</style>
