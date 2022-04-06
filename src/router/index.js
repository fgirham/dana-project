import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/webtask/home'
    },
    {
      path: '/webtask/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/webtask/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/webtask/contact',
      name: 'contact',
      component: ContactView
    },
  ]
})

export default router
