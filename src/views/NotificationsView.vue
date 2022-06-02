<template>
  <div class="page notifications-page">
    <h1>Notifications</h1>
    <div class="box notifications-list">
      <NotificationComponent v-for="notification in notifications" :key="notification.id" :date="notification.createdAt" :client="notification.client" :label="notification.type">{{ notification.content }}</NotificationComponent>
    </div>
  </div>
</template>

<script>
import NotificationComponent from "@/components/NotificationComponent";

export default {
  name: "NotificationsView",
  components: {
    NotificationComponent
  },
  data() {
    return {
      notifications: [
        {
          id: 1,
          client: {
            id: 1,
            title: 'Mr',
            number: 'CHQ-25634896247',
            firstName: 'John',
            lastName: 'Doe',
          },
          type: 'Découvert dépassé',
          content: 'à dépassé le montant autorisé du découvert.',
          createdAt: new Date('September 22, 2021 15:00:00')
        },
        {
          id: 2,
          client: {
            id: 5,
            title: 'Mme',
            number: 'LA-25634896247',
            firstName: 'Jane',
            lastName: 'Doe',
          },
          type: 'Demande de virement',
          content: 'souhaite effectué un virement bancaire.',
          createdAt: new Date('July 04, 2022 11:52:08')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .notifications-page {
    .notifications-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }
</style>
