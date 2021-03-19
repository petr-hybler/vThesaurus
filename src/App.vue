<template>
  <div id="app" @keydown.esc="close()">
      <thesaurus></thesaurus>
  </div>
</template>

<script>
  import Thesaurus from './components/thesaurus/Thesaurus.vue'

  export default {
    name: 'App',
    components: {
      Thesaurus
    },
    methods: {
      close() {
        this.$store.dispatch('thesaurus/reset')
      }
    }
  }
</script>

<style>
</style>
