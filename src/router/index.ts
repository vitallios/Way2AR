import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/DoctorsView.vue'),
      
    },
    {
      path: '/nurse',
      name: 'nurse',
      component: () => import('../views/NurseView.vue'),
    },
  ],
})

export default router
