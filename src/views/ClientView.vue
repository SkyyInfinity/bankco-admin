<template>
  <div class="page about-page">
    <h1>Client n°{{ client.clientNumber }}</h1>
    <div class="box">
      <div class="info-list">
        <form id="client-infos" action="" method="post">
          <div class="field-groups">
            <FieldComponent type="text" name="nom" value="Doe"/>
            <FieldComponent type="text" name="prénom" value="John"/>
          </div>
          <FieldComponent type="date" name="birthdate" text="Date de naissance" :value="client.birthdate"/>
          <FieldComponent type="email" name="email" text="Adresse e-mail" :value="client.email" disabled/>
          <FieldComponent type="number" name="number-of-account" text="Nombre de compte" :value="client.numberOfAccount.toString()" disabled/>
          <FieldComponent type="tel" name="phone" text="Numéro de téléphone" :value="client.phone"/>
          <FieldComponent type="password" name="password" text="Mot de passe"/>
          <ButtonComponent iconClass="ri-edit-line">Modifier les informations</ButtonComponent>
        </form>
      </div>
      <div class="actions">

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
        id: 6,
        title: 'Mr',
        clientNumber: 12679976475,
        firstName: 'Emmanuel',
        lastName: 'Macron',
        birthdate: '08/10/1984',
        email: 'user@example.com',
        phone: '0656994236',
        address: '37 rue de la victoire',
        city: 'Lille',
        country: 'France',
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
</style>
