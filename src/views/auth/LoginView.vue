<template>
  <div class="page login-page">
    <div class="login-block login-left">
      <div class="l-constrained">
        <h1 data-aos="fade-left">Accéder à mon espace</h1>
        <form @submit="submit" action="" id="login-form">
          <p v-if="error !== ''">{{ error }}</p>
          <FieldComponent data-aos="fade-left" data-aos-delay="150" type="email" name="email" text="Adresse e-mail" />
          <FieldComponent data-aos="fade-left" data-aos-delay="300" type="password" name="password" text="Mot de passe" />
          <router-link data-aos="fade-left" data-aos-delay="450" class="forgot-password" to="/login">Mot de passe oublié ?</router-link>
          <ButtonComponent data-aos="fade-left" data-aos-delay="600" title="Se connecter" color="primary" class="login-submit" icon-class="ri-arrow-right-line">Se connecter</ButtonComponent>
        </form>
      </div>
    </div>
    <div class="login-block login-right">
      <div class="l-constrained">
        <img class="credit-card" src="@/assets/img/signin-card.png" alt="carte de crédit">
        <img class="credit-card-shadow" src="@/assets/img/signin-card-shadow.png" alt="ombre">
      </div>
    </div>
  </div>
</template>

<script>
import FieldComponent from "@/components/form/FieldComponent";
import ButtonComponent from "@/components/ButtonComponent";
import axios from 'axios';
import CookieService from "@/services/CookieService";
import AuthService from "@/services/AuthService";

export default {
  name: "LoginView",
  components: {
    FieldComponent,
    ButtonComponent
  },
  data() {
    return {
      error: ''
    }
  },
  beforeMount() {
    if(AuthService.isLoggedIn()) {
      this.$router.push('/');
    }
  },
  methods: {
    submit(e) {
      e.preventDefault();

      let email = e.target.email.value;
      let password = e.target.password.value;

      axios.post('http://localhost:8080/signin', {
        email: email,
        pass: password
      })
      .then((res) => {

        if(res.data.success) {
          // select user
          // create cookie
          CookieService.setCookie('token', res.data.token);
          //Y'a pas d'erreurs, l'utilisateur est rediriger vers le dashboard
          if(CookieService.getCookie('token') !== undefined) {
            this.$router.push('/');
          }
        } else {
          this.error = 'Ce compte n\'éxiste pas.';
        }
      }).catch((err) => {
        console.log('error : ', err);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
 .login-page {
   width: 100%;
   height: 100%;
   display: flex;

   .l-constrained {
     width: 100%;
     height: 100%;
     max-width: var(--s-constrained);
     padding: 0 2rem;
     margin: 0 auto;
     display: flex;
     flex-direction: column;
     justify-content: center;
   }
   .login-block {
     height: 100%;
   }
   .login-left {
     padding: 0 222px;
     flex: 1;
     background-image: url('@/assets/img/signin-background-left.png');
     background-repeat: no-repeat;
     background-size: cover;
     background-position: top center;

     h1 {
       font-size: 48px !important;
       max-width: 368px;
     }
     #login-form {
       display: flex;
       flex-direction: column;
       gap: 32px;

       .forgot-password {
         color: var(--c-tertiary);

         &:hover {
           text-decoration: underline;
         }
       }
     }
   }
   .login-right {
     position: relative;
     flex: 1;
     background-image: url('@/assets/img/signin-background-right.jpg');
     background-repeat: no-repeat;
     background-size: cover;
     background-position: center center;

     .credit-card {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate3d(-50%, -50%, 0);
       animation: floatingCard 2s ease-in-out infinite;
       z-index: 2;
       pointer-events: none;
     }
     .credit-card-shadow {
       position: absolute;
       top: 50%;
       left: 50%;
       transform: translate3d(-50%, -10%, 0);
       animation: floatingShadow 2s ease-in-out infinite;
       z-index: 1;
       pointer-events: none;
     }
   }
 }

 @keyframes floatingCard {
   0% {
     transform: translate3d(-50%, -50%, 0);
   }
   50% {
     transform: translate3d(-50%, -60%, 0);
   }
   100% {
     transform: translate3d(-50%, -50%, 0);
   }
 }
 @keyframes floatingShadow {
   0% {
     transform: translate3d(-50%, -10%, 0) scale(1);
     opacity: 1;
   }
   50% {
     transform: translate3d(-50%, -10%, 0) scale(0.95);
     filter: blur(5px);
     opacity: 0.6;
   }
   100% {
     transform: translate3d(-50%, -10%, 0) scale(1);
     opacity: 1;
   }
 }
 @media screen and (max-width: 1618px) {
   .login-page {
     .login-left {
       padding: 0 100px;
       flex: 1;
     }
     .login-right {
       flex: 1;
     }
   }
 }
 @media screen and (max-width: 1024px) {
   .login-page {
     .login-right {
       display: none;
     }
   }
 }
 @media screen and (max-width: 768px) {
   .login-page {
     .login-left {
       padding: 0 32px;

       h1 {
         font-size: 34px !important;
         min-width: 40%;
       }
     }
   }
 }
 @media screen and (max-width: 291px) {
   .login-page {
     .login-left {
       padding: 0 16px;

       h1 {
         font-size: 28px !important;
         min-width: 100%;
       }
     }
   }
 }
</style>
