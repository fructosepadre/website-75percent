<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Header from '@/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
