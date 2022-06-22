<template>
  <div class="mailbox-list">
    <div @click="toggleMessage" v-for="message in messages" :key="message.id" :data-id="message.id" class="mailbox-item">
      <i class="toggle-button ri-arrow-drop-down-line"></i>
      <div class="mailbox-header__top">
        <p class="from">De : <span>{{ message.from }}</span></p>
        <p class="subject">Sujet : <span>{{ message.subject }}</span></p>
      </div>
      <div class="mailbox-header__bottom">
        <p class="to">Pour : <span>{{ message.to }}</span></p>
        <p>Message : <span v-html="message.content"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageListComponent",
  components: {

  },
  data() {
    return {
      messages: [
        {
          id: 1,
          from: 'Jean-Jacques Pignon',
          to: 10551486994,
          subject: 'Dépense',
          content: 'Bonjour monsieur, <br>je voudrais savoir le montant de mes dépenses dans le mois.'
        },
        {
          id: 2,
          from: 'Arielle Mesnil',
          to: 10551486994,
          subject: 'Découvert',
          content: 'Bonjour Monsieur, <br>Pouvez-vous augmenter mon découvert autorisé de 100 euros pour seulement ce mois ci ? Merci à vous.'
        },
        {
          id: 3,
          from: 'Roger Ducros',
          to: 10551486994,
          subject: 'Rendez-vous',
          content: 'Bonjour monsieur/madame, <br>serait-il possible de prendre rensez-vous cette semaine pour discuter ?'
        }
      ]
    }
  },
  methods: {
    toggleMessage(e) {
      const ID = e.target.dataset.id;
      e.target.classList.toggle('is-visible');

      console.log(ID);
    }
  }
}
</script>

<style lang="scss" scoped>
  .mailbox-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .mailbox-item {
      position: relative;
      .toggle-button {
        position: absolute;
        right: 8px;
        top: 8px;
        cursor: pointer;
        padding: 8px;
      }
      .mailbox-header__top {
        padding: 8px;
      }
      .mailbox-header__bottom {
        display: none;

        &.is-visible {
          display: block;
        }
      }
    }
  }
</style>