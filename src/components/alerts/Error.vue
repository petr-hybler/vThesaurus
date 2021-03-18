<template lang="html">
  <transition name="fade">
    <div class="alert alert-warning alert-dismissible" role="alert">
        {{message}}
    </div>
  </transition>
</template>

<script>
export default {
  name: "ErrorAlert",
  props: ['message']
}
</script>

<style lang="css" scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
