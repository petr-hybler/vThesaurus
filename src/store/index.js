import Vue from 'vue'
import Vuex from 'vuex'


import { thesaurus } from './../components/thesaurus/thesaurus.store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
   thesaurus
  },
  state: {
  }
})
