// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { store } from './modules/store'

// 사용할 js 추가
import VueJsModal from 'vue-js-modal'
import Toasted from 'vue-toasted'
import InfiniteLoading from 'vue-infinite-loading'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

// 사용할 icon
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

// 사용할 icon 라이브러리에 추가
library.add(faAngleDown)
library.add(faAngleRight)

// icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('VueSlider', VueSlider)

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
Vue.use(InfiniteLoading)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
