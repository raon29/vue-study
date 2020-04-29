import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modal'
import fontSize from './fontSize'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    modal,
    fontSize
  }
})

export default store
