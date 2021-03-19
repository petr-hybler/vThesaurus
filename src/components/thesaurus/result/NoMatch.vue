<template lang="html">
  <div class="container">
    Did you mean?<br>
    {{data}}
  </div>
</template>

<script>
  export default {
    name: "Match",
    props: ['data']
  }
</script>

<style lang="css" scoped>
</style>
