import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import AccountView from '../views/AccountView.vue'
import LoginView from '../views/LoginView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
       path: '/',
       name: 'login',
       component: LoginView
    },
    {
        path: '/home',
        name: 'home',
        component: HomePageView
    },
    {
        path: '/account',
        name: 'profile',
        component: AccountView
    }
  ]
})

export default router
