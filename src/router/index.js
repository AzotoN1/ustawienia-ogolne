import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: MainView
  },
  {
    path: '/contributors',
    name: 'Contributors',
    component: MainView
  },
  {
    path: '/settings',
    name: 'Settings',
    component: MainView
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: MainView
  },
  {
    path: '/notifications',
    name: 'Notifications',
    component: MainView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
