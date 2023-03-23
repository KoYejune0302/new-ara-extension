<template>
  <div class="Login">
    <h1> NewARA </h1>
     <a :href="loginUrl" class="button banner__button login__link">
        <i class="material-icons">login</i>
        {{ $t('login') }}
      </a> 
  </div>
</template>

<script>


export default {
  name: 'Login',

  computed: {
    loginUrl () {
      return 'https://newara.sparcs.org'
    }
  },

}
</script>

<style lang="scss" scoped>

.button {
  box-sizing: border-box;

  position: absolute;
  width: 240px;
  height: 50px;
  left: 40px;
  top: 390px;

  border: 1px solid #ED3A3A;
  border-radius: 15px;
}

</style>
