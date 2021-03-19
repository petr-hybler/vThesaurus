export const thesaurus = {
  namespaced: true,
  state: {
    word: null,
    definition: null,
    flipped: false,
    error: {
        isError: false,
        msg: null
    }
  },
  actions: {
    setWord({commit},payload){
      commit("SETWORD",payload)
    },
    reset({commit}){
      commit("RESET")
    },
    setDefinition({commit}, payload){
      commit("SETDEFINITION", payload)
    },
    showResult({commit}, payload) {
      commit("SHOWRESULT", payload)
    },
    error({commit}, payload) {
      commit("ERROR", payload)
    }
  },
  mutations: {
      SETWORD(state,payload){
        state.word = payload
      },
      RESET(state){
        state.word = null
        state.defintion = null
        state.error.isError = false
        state.error.msg = null
        state.flipped = false
      },
      SHOWRESULT(state, payload){
        state.definition = payload
        state.flipped = true
      },
      ERROR(state, payload) {
        state.error.isError = payload.isError
        state.error.msg = payload.errMessage
      }
  }
};
