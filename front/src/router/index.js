import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import AccountView from '../views/AccountView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
        path: '/',
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
