// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './modules/store'

// 사용할 library 추가
import VueJsModal from 'vue-js-modal'
import Toasted from 'vue-toasted'
import InfiniteLoading from 'vue-infinite-loading'

import Card from './components/forms/Card'
import CardDetail from './components/forms/CardDetail'
import { ToggleButton } from 'vue-js-toggle-button'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/default.css'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueGlide from 'vue-glide-js'
import 'vue-glide-js/dist/vue-glide.css'

// 사용할 icon
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

// 사용할 icon 라이브러리에 추가
library.add(faAngleDown)
library.add(faAngleRight)

// icon component
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.component('VueSlider', VueSlider)
Vue.component('ToggleButton', ToggleButton)
Vue.component('card', Card)
Vue.component('card-detail', CardDetail)

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
Vue.use(Vuetify)
Vue.use(VueGlide)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  router,
  store,
  components: { App },
  template: '<App/>'
})
