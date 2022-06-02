<template>
  <div class="page notfound-page">
    <div class="notfound-block notfound-left">
      <div class="l-constrained">
        <h1 data-aos="fade-right">Oups...</h1>
        <div class="left-content">
          <p data-aos="fade-right" data-aos-delay="150">
            Nous sommes désolé, mais la page que vous essayez d'afficher n'existe pas.
            <br>
            Veuillez retourner à l'accueil via le lien ci-dessous.</p>
          <ButtonComponent data-aos="fade-right" data-aos-delay="300" url="/" icon-class="ri-logout-circle-line">Revenir à l'accueil</ButtonComponent>
        </div>
      </div>
    </div>
    <div class="notfound-block notfound-right">
      <div class="l-constrained">
<!--        <img class="notfound-img" src="@/assets/img/not-found.png" alt="Page introuvable">-->
        <svg class="notfound-img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="240" height="240"><path fill="none" d="M0 0h24v24H0z"/><path class="path-svg" d="M9.954 2.21a9.99 9.99 0 0 1 4.091-.002A3.993 3.993 0 0 0 16 5.07a3.993 3.993 0 0 0 3.457.261A9.99 9.99 0 0 1 21.5 8.876 3.993 3.993 0 0 0 20 12c0 1.264.586 2.391 1.502 3.124a10.043 10.043 0 0 1-2.046 3.543 3.993 3.993 0 0 0-3.456.261 3.993 3.993 0 0 0-1.954 2.86 9.99 9.99 0 0 1-4.091.004A3.993 3.993 0 0 0 8 18.927a3.993 3.993 0 0 0-3.457-.26A9.99 9.99 0 0 1 2.5 15.121 3.993 3.993 0 0 0 4 11.999a3.993 3.993 0 0 0-1.502-3.124 10.043 10.043 0 0 1 2.046-3.543A3.993 3.993 0 0 0 8 5.071a3.993 3.993 0 0 0 1.954-2.86zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from "@/components/ButtonComponent";

export default {
  name: "NotFoundView",
  components: {
    ButtonComponent
  }
}
</script>

<style lang="scss" scoped>
.notfound-page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row-reverse;

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
  .notfound-block {
    height: 100%;
  }
  .notfound-left {
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
    .left-content {
      display: flex;
      flex-direction: column;
      gap: 32px;

      p {
        color: var(--c-tertiary);
      }
    }
  }
  .notfound-right {
    position: relative;
    flex: 1;
    background-image: url('@/assets/img/signin-background-right.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

    .notfound-img {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 2;
      pointer-events: none;
      transform: translate3d(-50%, -50%, 0) rotate(0);
      animation: rotate 2s cubic-bezier(.8,-.5,.2,2) infinite;

      .path-svg {
        fill: var(--c-background);
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: translate3d(-50%, -50%, 0) rotate(0);
  }
  50% {
    transform: translate3d(-50%, -50%, 0) rotate(90deg);
  }
  100% {
    transform: translate3d(-50%, -50%, 0) rotate(180deg);
  }
}

@media screen and (max-width: 1618px) {
  .notfound-page {
    .notfound-left {
      padding: 0 100px;
      flex: 1;
    }
    .notfound-right {
      flex: 1;
    }
  }
}
@media screen and (max-width: 1024px) {
  .notfound-page {
    .notfound-right {
      display: none;
    }
  }
}
@media screen and (max-width: 768px) {
  .notfound-page {
    .notfound-left {
      padding: 0 32px;

      h1 {
        font-size: 34px !important;
        min-width: 40%;
      }
    }
  }
}
@media screen and (max-width: 291px) {
  .notfound-page {
    .notfound-left {
      padding: 0 16px;

      h1 {
        font-size: 28px !important;
        min-width: 100%;
      }
    }
  }
}
</style>