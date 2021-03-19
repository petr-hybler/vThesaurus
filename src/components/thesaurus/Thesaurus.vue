<template lang="html">
  <div class="container">
    <h1 class="title py-3">vThesaurus</h1>
      <template v-if="apiKey">
        <vue-flip :value="isFlipped()" width="" height="">
           <template v-slot:front class="front">
              <search-form></search-form>
           </template>
           <template v-slot:back class="back">
             <result-box v-if="isDefinitionReady"></result-box>
           </template>
        </vue-flip>
      </template>
      <template v-else>
          <div class="container text-center text-white">
            <h1>Oops, no API KEY???</h1>
            <p>Please check <i class="text-muted">./thesaurus.mixin.js</i> and enter your API key</p>
          </div>
      </template>
  </div>
</template>

<script>
  import VueFlip from 'vue-flip'
  import SearchForm from "./search/SearchForm.vue"
  import Result from "./result/Result.vue"
  import {thesaurus} from './../../mixins/index'

  export default {
    name: "Thesaurus",
    mixins: [thesaurus.default],
    components: {
      'vue-flip': VueFlip,
      'search-form': SearchForm,
      'result-box': Result
    },
    data() {
      return {
        flipped: false
      }
    },
    methods: {
      isFlipped() {
        return this.$store.state.thesaurus.flipped;
      }
    },
    computed: {
      isDefinitionReady(){
        return (this.$store.state.thesaurus.definition == null) ? false : true
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
</style>
