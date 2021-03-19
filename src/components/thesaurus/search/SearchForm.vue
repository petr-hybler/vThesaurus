<template lang="html">
  <div class="thesaurus">
      <div class="input-group mb-3">
        <input class="form-control form-control-lg"
                :class="{'is-invalid': error().isError}"
                aria-describedby="missingWord"
                required
                type="text"
                placeholder="What do you want to learn today?"
                v-model="word"
                @keyup.enter="getDefinition()">
        <div class="input-group-append">
          <button class="btn btn-info text-center btn-lg" @click="getDefinition()">Search</button>
        </div>
      </div>
      <transition name="fade">
        <div id="missingWord" class="invalid-feedback text-light text-center" v-if="error().isError">
          {{error().msg}}
        </div>
      </transition>
  </div>
</template>

<script>
  import ThesaurusService from "./../thesaurus.service"

  export default {
    name: "SearchForm",
    data() {
      return {
        word: null
      }
    },
    methods: {
          getDefinition() {
            this.$store.dispatch('thesaurus/setWord',this.word)

            if (this.word) {
              ThesaurusService.getDefinition(this.word)
                .then(
                  response => {
                    this.$store.dispatch('thesaurus/showResult',response.data)
                    this.word = null // remove the lookup word
                  },
                  error => {
                    console.log("Oops:"+error)
                  }
                )
            }else{
              this.$store.dispatch('thesaurus/error', {
                                                  isError: true,
                                                  errMessage: "You have to insert a word."
                                                })
              setTimeout(() => {
                this.$store.dispatch('thesaurus/error', {
                                                    isError: false,
                                                    errMessage: null
                                                  })
              }, 2000)
            }

          },
          error() {
            return this.$store.state.thesaurus.error;
          }
    }
  }
</script>

<style lang="css" scoped>
.thesaurus {
  background: #34495E;
  position: absolute;
  width: 50%;
  top: 30%;
  color: #41B883;
}
.invalid-feedback {
  display: block;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.btn-info {
  background-color: #41B883 !important;
  border-color: #41B883 !important;
}
.btn-info:hover {
  background-color: #3aa475 !important;
  border-color: #3aa475 !important;
}
</style>
