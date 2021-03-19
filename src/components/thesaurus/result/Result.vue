<template lang="html">
  <div class="container explanation" id="explanation">
    <button type="button" class="close" aria-label="Close" @click="close()">
       <span aria-hidden="true">&times;</span>
    </button>
    <div class="container mt-4">
      <template v-if="extract()">
        <match :data="definition"></match>
      </template>
      <template v-if="!extract()">
        <no-match :data="suggestions"></no-match>
      </template>
    </div>
  </div>
</template>

<script>
  import Match from './Match.vue'
  import NoMatch from './NoMatch.vue'

  export default {
    name: "Result",
    components: {
      Match
      , NoMatch
    },
    data() {
      return {
        definition: [],
        suggestions: [],
        isMatch: null,
      }
    },
    methods: {
      close() {
        this.$store.dispatch('thesaurus/reset')
      },
      getWord(){
        return this.$store.state.thesaurus.word
      },
      getDefinition() {
        return this.$store.state.thesaurus.definition
      },
      extract(){
        let data = this.getDefinition()
        if(typeof data[0] == "object"){
          this.definition = data
          this.isMatch = true
        }else {
          this.suggestions = this.$store.state.thesaurus.definition
          this.isMatch = false
        }
        return this.isMatch
      }
    }
  }
</script>

<style lang="css" scoped>
.explanation{
  color: #41B883;
  position: absolute;
  top: 30%;
}
.close {
  color: white;
}
</style>
