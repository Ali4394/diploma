import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/univers',
      name: 'univers',
      component: () => import('../sections/UniversitySection.vue')
    },
    {
      path: '/course',
      name: 'course',
      component: () => import('../sections/CourseSection.vue')
    },
    {
      path: '/info',
      name: 'info',
      component: () => import('../sections/InfoSection.vue')
    },
    {
      path: '/page/:firebaseId',
      name: 'page',
      component: () => import('../views/UniversityIdPage.vue')
    }
  ]
})

export default router
