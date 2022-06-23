<template>
  <div class="mailbox-list">
    <div v-for="message in messages" :key="message.id" class="mailbox-item">
      <ButtonComponent class="toggle-button" @click="toggleMessage" color="secondary" title="Voir le message" iconClass="ri-arrow-down-s-line"/>
      <div class="mailbox-header__top">
        <p class="from">De : <span>{{ message.from }}</span></p>
        <p class="subject">Sujet : <span>{{ message.subject }}</span></p>
      </div>
      <div class="mailbox-header__bottom">
        <p class="to">Pour : <span>{{ message.to }}</span></p>
        <p class="message">Message : <span v-html="message.content"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonComponent from '@/components/ButtonComponent';

export default {
  name: "MessageListComponent",
  components: {
    ButtonComponent
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
      if(!e.target.classList.contains('ri-arrow-down-s-line')) {
        e.target.parentElement.classList.toggle('is-visible');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .toggle-button {
    position: absolute;
    right: 16px;
    top: 21px;

    i {
      pointer-events: none !important;
    }
  }
  .mailbox-list {
    display: flex;
    flex-direction: column;
    gap: 16px;

    .mailbox-item {
      padding: 8px 16px;
      position: relative;
      background-color: var(--c-secondary-lighter);
      border-radius: 8px;

      .mailbox-header__top {
        padding: 8px;

        p {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;

          span {
            font-size: 14px;
            text-transform: none;
            font-weight: normal;
          }
        }
      }
      .mailbox-header__bottom {
        display: none;
        padding: 16px 32px;
        border-radius: 8px;
        background-color: var(--c-secondary);

        p {
          font-size: 12px;
          text-transform: uppercase;
          font-weight: bold;

          span {
            font-size: 14px;
            text-transform: none;
            font-weight: normal;
          }
          &.message {
            span {
              display: block;
              line-height: 1.5;
              margin-top: 8px;
              font-family: Consolas, sans-serif;
            }
          }
        }
      }
      &.is-visible {
        .mailbox-header__bottom {
          display: block;
        }
      }
    }
  }
</style>