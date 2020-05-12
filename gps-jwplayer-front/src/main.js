import App from './App.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { store } from './store/store'
import VeeValidate from 'vee-validate';
import vuetify from './plugins/vuetify'
import LoadScript from 'vue-plugin-load-script';

window.eventBus = new Vue()

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VeeValidate)
Vue.use(LoadScript);
Vue.loadScript("https://cdn.jwplayer.com/libraries/sbU3eHJm.js")
    .then(() => {
      console.log("succesfully loaded jwplayer")
    })
    .catch(() => {
      console.log("failed to load jwplayer")
    })


const router = new VueRouter({
  routes,
  mode: 'history'
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'movies',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

new Vue({
  el: '#app',
  router: router,
  store: store,
  vuetify: vuetify,
  render: h => h(App)
})