import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import HomePage from '../views/HomePage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage
  },

  {
    path: "/scanners/qrcode-scanner",
    component: ()=>import('@/views/scanners/qrcode_scanner/QRCodeScanner.vue')
  },

  { 
    path: '/:pathMatch(.*)*', 
    component: () => import('@/views/ResourceNotFound.vue') 
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
