import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/MemberView.vue'
import DashboardView from '@/views/DashboardView.vue'
import LibraryView from '../views/LibraryView.vue'
import BookView from '@/views/BookView.vue'
import CategoryView from '@/views/CategoryView.vue'
import LoanVeiw from '@/views/LoanVeiw.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
    },
    {
      path: '/categories',
      name: 'categories',
      component: CategoryView,
    },
    {
      path: '/loans',
      name: 'Loans',
      component: LoanVeiw,
    },
    {
      path: '/books',
      name: 'Books',
      component: BookView,
    },
    {
      path: '/libraries',
      name: 'Libraries',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LibraryView.vue'),
    },
  ],
})

export default router
