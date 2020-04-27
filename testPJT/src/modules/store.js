import Vue from 'vue'
import Vuex from 'vuex'
import modal from './modal'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    modal
  }
})

export default store
