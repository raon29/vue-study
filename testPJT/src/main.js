// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { store } from './modules/store'

// 사용할 js 추가
import VueJsModal from 'vue-js-modal'
import Toasted from 'vue-toasted'

Vue.config.productionTip = false

Vue.use(VueJsModal, {
  dialog: true,
  dynamic: true,
  injectModalsContainer: true,
  dynamicDefaults: {
    clickToClose: false
  }
})
Vue.use(Toasted)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
