<template>
  <div class="page logout-page"></div>
</template>

<script>
import AuthService from "@/services/AuthService";
import CookieService from "@/services/CookieService";

export default {
  name: "LogoutView",
  beforeMount() {
    if(AuthService.isLoggedIn()) {
      // Delete cookie's value
      CookieService.deleteCookie('token');
      // Redirect to login page
      this.$router.push('/login');
    }
  }
}
</script>
