<template lang="html">
  <div class="container">

    <error-alert :message="error" v-if="error"></error-alert>

    <div class="thesaurus">
        <h1 class="title py-5">vThesaurus</h1>
        <div class="input-group mb-3">
          <input class="form-control form-control-lg"
                  type="text"
                  placeholder="What do you want to learn today?"
                  v-model="word">
          <div class="input-group-append">
            <button class="btn btn-info text-center btn-lg" @click="getDefinition()">Search</button>
          </div>
        </div>
        <div class="container p-5 border" v-if="definition">
          {{definition}}
        </div>
    </div>
  </div>
</template>

<script>
  import ThesaurusService from "./thesaurus.service"
  import ErrorAlert from "./../alerts/Error.vue"

  export default {
    name: "Thesaurus",
    components: {
      'error-alert': ErrorAlert
    },
    data() {
      return {
        word: null,
        definition: null,
        error: null
      }
    },
    methods: {
        getDefinition() {
          if (this.definition) {
            ThesaurusService.getDefinition(this.word).then(
              response => {
                this.definition = response.data
              },
              error => {
                console.log("Oops:"+error)
              }
            )
          }else{
            this.error = "You have to insert a word."
            setTimeout(() => {
              this.error = null
            }, 2000)
          }
        }
    }
  }
</script>

<style lang="css" scoped>
.title {
  color: #41B883;
  text-align: center;
  font-weight: bold;
}
.thesaurus {
  background: #34495E;
  position: absolute;
  width: 50%;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #41B883;
}
</style>
