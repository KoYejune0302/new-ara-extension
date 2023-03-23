<template>
  <div id="root-container">
    <div id="app">
      <Login />
    </div>
  </div>
</template>

<script>
import Login from '/src/components/Login.vue'

export default {
  name: 'App',

  components: { Login },

}
</script>

<style lang="scss">
#root-container {
  #app {
    min-height: 100vh;
    padding-bottom: 54px;
    margin-bottom: -60px;
    // @include breakPoint(mobile) {
    //   padding-bottom: 174px;
    //   margin-bottom: -174px;
    // }
  }
}
</style>