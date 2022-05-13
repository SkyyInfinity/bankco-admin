<template>
  <div class="page about-page">
    <h1>Client n°{{ client.clientNumber }}</h1>
    <div class="box-contents">
      <!--  Informations  -->
      <div class="box informations">
        <h2>Informations</h2>
        <div class="info-list">
          <form id="client-infos" action="" method="post">
            <div class="field-groups">
              <FieldComponent type="text" name="last-name" value="Doe" text="Nom"/>
              <FieldComponent type="text" name="first-name" value="John" text="Prénom"/>
            </div>
            <FieldComponent type="date" name="birthdate" text="Date de naissance" :value="client.birthdate" disabled/>
            <div class="field-groups">
              <FieldComponent type="email" name="email" text="Adresse e-mail" :value="client.email" disabled/>
              <FieldComponent type="tel" name="phone" text="Numéro de téléphone" :value="client.phone"/>
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
      <div class="box contact">
        <h2>Contact</h2>
        <div class="btns-contact">
          <a :href="`tel:${client.phone}`" class="tel btn-contact" >Appeler <i class="ri-phone-line"></i></a>
          <a :href="`mailto:${client.email}`" class="mail btn-contact">Envoyer un message <i class="ri-mail-line"></i></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FieldComponent from '@/components/FieldComponent';
import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: "ClientView",
  components: {
    FieldComponent,
    ButtonComponent
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
        address: '37 rue de la victoire', // ok
        city: 'Lille', // ok
        country: 'France', // ok
        numberOfAccount: 2
      }
    }
  },
  mounted() {
    let id = this.$route.params.id;
    console.log(id);
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
    grid-template-areas: "info contact";
    gap: 32px;
  }
  .informations {
    grid-area: info;
  }
  .contact {
    display: flex;
    flex-direction: column;
  }
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

      &:hover {
        background-color: var(--c-tertiary);
      }
    }
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
        "contact";
    }
  }
</style>
