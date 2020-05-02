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
    component: () => import('@/components/QRgenerate.vue'), 
    meta: { requiresAuth: true }
  },
  {
    path: '*',
    redirect: '/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from, next)=>{
  const hasPermission = localStorage.getItem("accessToken");
  window.console.log(hasPermission)
  if (to.matched.some(record => record.meta.requiresAuth)) {
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

