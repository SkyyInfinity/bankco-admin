<template>
  <div class="page logout-page">

  </div>
</template>

<script>
export default {
  name: "LogoutView",
  created() {
    if(this.userExist()) {
      //TODO Disconnect from current user
      console.log('User exist');
      // Redirect to login ?
      this.$router.push('/login');
    }
  },
  methods: {
    userExist() {
      return true;
    }
  }
}
</script>
