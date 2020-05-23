import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'
import BootstrapVue from 'bootstrap-vue'
import VueQriously from 'vue-qriously'
import VueSession from 'vue-session'
import { BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap-vue/dist/bootstrap-vue-icons.min.css'
import firebase from '@/firebase'
Vue.use(BootstrapVueIcons)
Vue.use(VueSession)
Vue.use(VueQriously)
Vue.use(BootstrapVue)
Vue.use(VueMaterial)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app')
