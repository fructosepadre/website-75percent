import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/components/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/components/Register.vue')
  },
  {
    path: '/qr-generate',
    name: 'qrgenerate',
    component: () => import('@/components/QRgenerate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router

