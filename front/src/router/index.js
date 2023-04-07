import { createRouter, createWebHistory } from 'vue-router'
import HomePageView from '../views/HomePageView.vue'
import AccountView from '../views/AccountView.vue'
import LoginView from '../views/LoginView.vue'
import ExplorerView from '../views/ExplorerView.vue'
import NotificationsView from '../views/NotificationsView.vue'
import SignUpView from '../views/SignUpView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
    {
       path: '/login',
       name: 'login',
       component: LoginView
    },
    {  
       path: '/signup',
        name: 'signup',
       component: SignUpView
    },
    {
        path: '/',
        name: 'home',
        component: HomePageView
    },
    {
        path: '/account',
        name: 'profile',
        component: AccountView
    },
    {
        path: '/explore',
        name: 'explore',
        component: ExplorerView
    },
    {
        path: '/notifications',
        name: 'notifications',
        component: NotificationsView
    }
  ]
})

export default router
