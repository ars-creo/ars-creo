import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import OfferPage from './components/OfferPage'
import MainPage from './components/MainPage'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: MainPage },
  { path: '/strony-internetowe', component: OfferPage }
]

const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)

}).$mount('#app')
