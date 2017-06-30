import Vue from 'vue'
import App from './App.vue'
import Example1 from './components/Example1.vue'
import Example2 from './components/Example2.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [{
  path: '/example1',
  component: Example1
}, {
  path: '/example2',
  component: Example2
}]

const router = new VueRouter({
  routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
