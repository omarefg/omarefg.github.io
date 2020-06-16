import Vue from 'vue'
import App from '@/App.vue'
import i18n from '@/i18n'
import VueRouter from 'vue-router'
import routes from '@/routes'

Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode: 'history'
})

const vue = new Vue({
  router,
  i18n,
  render: h => h(App)
})

vue.$mount('#app')
