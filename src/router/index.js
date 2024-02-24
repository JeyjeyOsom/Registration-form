import { createRouter, createWebHistory } from 'vue-router'
import RegistrationForm from '../components/RegistrationForm.vue'
import UserProfile from '../components/UserProfile.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/register' },
    { path: '/register', component: RegistrationForm },
    { path: '/profile', name: 'profile', component: UserProfile }
  ]
})

export default router
