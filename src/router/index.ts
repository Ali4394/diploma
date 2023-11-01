import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Main',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/univers',
      name: 'univers',
      component: () => import('../sections/UniversitySection.vue')
    }
  ]
})

export default router
