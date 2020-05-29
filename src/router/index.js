import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/Login.vue'),
    meta: { requiresNotAuth: true }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/Register.vue')
  },
  {
    path: '/qr-generate',
    name: 'qrgenerate',
    component: () => import('@/pages/QRgenerate.vue'), 
    meta: { requiresAuth: true }
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@/pages/Home.vue'), 
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next)=>{
  const hasPermission = localStorage.getItem("accessToken")
  if (to.matched.some(record => record.meta.requiresNotAuth)) {
    if(hasPermission!=null) {
      next({
        path: '/home',
      })
    }
    else{
      next()
    }
  }
  else {
    next()
  }
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if(hasPermission==null) {
      next({
        path: '/login',
      })
    }
    else{
      next()
    }
  }
  else {
    next()
  }
})

export default router

