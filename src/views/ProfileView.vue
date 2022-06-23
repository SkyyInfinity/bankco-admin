<template>
  <div class="page profile-page">
    <h1>Votre profil</h1>
  </div>
</template>

<script>

import AuthService from "@/services/AuthService";

export default {
  name: 'ProfileView',
  components: {},
  beforeMount() {
    if(!AuthService.isLoggedIn()) {
      this.$router.push('/login');
    }
  },
}
</script>

<style lang="scss" scoped>

</style>
