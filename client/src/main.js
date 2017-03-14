import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import VueLocalStorage from 'vue-localstorage'
import App from './App.vue'


import { routes } from './routes'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(VueLocalStorage)
const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
