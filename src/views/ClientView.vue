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
          <FieldComponent type="email" name="adresse e-mail" value="user@example.com"/>
          <FieldComponent type="number" name="nombre de compte" value="3"/>
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
