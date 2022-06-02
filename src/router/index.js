import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProfileView from '@/views/ProfileView.vue';
import ClientsView from '@/views/ClientsView.vue';
import ClientView from '@/views/ClientView.vue';
import LogoutView from "@/views/auth/LogoutView";
import LoginView from "@/views/auth/LoginView";
import NotFoundView from "@/views/NotFoundView";
import NotificationsView from "@/views/NotificationsView";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/clients',
    name: 'clients',
    component: ClientsView
  },
  {
    path: '/clients/:id',
    name: 'client',
    component: ClientView
  },
  {
    path: '/notifications',
    name: 'notifications',
    component: NotificationsView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout',
    name: 'logout',
    component: LogoutView
  },
  // Do not insert new route under route named NotFound
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
