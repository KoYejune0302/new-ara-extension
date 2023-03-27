<template>
  <div class="login">
    <img src="/src/assets/ServiceAra.svg" alt="logo" />
    <button class="button language-button" @click="changeLocale">
      <i class="material-icons">language</i>
      <span class="is-hidden-touch">한국어</span>
    </button>
    <div class="banner login">
        <div class="banner__identity-bar" />
        <h1 class="banner__title">
          <!-- {{ $t('login-title') }} -->
          Please login to use NewAra services
        </h1>
        <a :href="loginUrl" class="button banner__button login__link">
          <i class="material-icons">login</i>
          <!-- {{ $t('login') }} -->
          Log in with SPARCS SSO
        </a>
      </div>
  </div>
</template>

<script>
// import { changeLocale } from '/src/i18n'


export default {
  name: 'Login',

  computed: {
    loginUrl () {
      return 'https://newara.sparcs.org'
    }
  },

  methods: {
    // changeLocale
  }
}
</script>

<!-- <i18n>
ko:
  lang: 'English'
  login-title: '뉴아라 서비스를 이용하시려면 로그인해주세요.'
  login: 'SPARCS SSO로 로그인'

en:
  lang: '한국어'
  login-title: 'Please login to use NewAra services'
  login: 'Log in with SPARCS SSO'
</i18n> -->

<style lang="scss" scoped>
@import '/src/theme.scss';

.language-button {
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 1;

  color: var(--theme-400);
  font-size: 12px;
  line-height: 20px;
  padding: 12px;
  height: 2.5rem;

  @include breakPoint(min) {
    color: black;
    border: none;
    top: 5px;
    padding: 0;
    z-index: 3;
    &:hover {
      box-shadow: none;
    }
  }

  i {
    height: 20px;
    width: 20px;
    margin-right: 5px;
    font-size: 20px;
  }
}

.login {
  min-height: 754px;
  margin-bottom: -54px;

  @include breakPoint(min) {
    min-height: 50rem;
  }

  @include breakPoint(mobile) {
    min-height: 56rem;
  }
}

.title {
  @keyframes title-animation {
    from {
      width: 100vw;
    }
    to {
      width: 30vw;
    }
  }
  animation-name: title-animation;
  animation-timing-function: ease-in-out;
  animation-delay: 1s;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 2;
  min-height: 754px;
  background-color: var(--theme-100);

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  @include breakPoint(min) {
    animation: none;
    width: 100vw;
    height: 250px;
    min-height: 0;
  }

  &__description {
    color: var(--theme-400);
    text-align: center;
    line-height: 3rem;
    font-size: 32px;
    width: 28vw;

    @include breakPoint(min) {
      font-size: 21px;
      line-height: 25px;
      width: inherit;
    }
  }

  &__logo {
    height: 5rem;
    margin-bottom: 1rem;

    @include breakPoint(min) {
      height: 4rem;
    }
  }
}

.banners {
  position: absolute;
  top: 0;
  left: 40vw;
  right: 0;
  bottom: 0;

  display: flex;
  justify-content: center;
  flex-flow: column;
  padding-top: 200px;

  @include breakPoint(min-mid) {
    left: 34vw;
  }

  @include breakPoint(min) {
    left: 0;
    align-items: center;
    justify-content: flex-start;
    margin-top: 280px;
    padding-top: 0;

    margin-left: 0;
  }
}

.banner {
  display: flex;
  flex-flow: column;

  @include breakPoint(min) {
    align-items: center;
    width: 90%;
    text-align: center;
    max-width: 25rem;
  }

  &__identity-bar {
    height: 5px;
    width: 30px;
    background-color: var(--theme-400);
  }

  &__title {
    font-size: 20px;
    font-weight: bold;
    margin: 12px 0;
    word-break: keep-all;
    white-space: normal;

    @include breakPoint(min) {
      font-size: 20px;
      white-space: pre-wrap;
    }
  }

  &__subtitle {
    font-size: 14px;
    margin-bottom: 15px;
    word-break: keep-all;
    white-space: normal;

    @include breakPoint(min) {
      font-size: 12px;

      white-space: pre-wrap;
    }
  }
  &__button {
    color: var(--theme-400);
    font-size: 15px;
    margin-right: 10px;

    @include breakPoint(min) {
      margin-right: 0;
      margin-bottom: 10px;
    }
    &:hover {
      color: var(--theme-500);
    }
  }
  &__buttons {
    display: flex;
    align-items: center;
    @include breakPoint(min) {
      flex-flow: column;
    }
  }
}

.login {
  margin-bottom: 100px;
  .banner__title {
    font-size: 28px;

    @include breakPoint(min) {
      font-size: 20px;
    }
  }
  &__link {
    width: 250px;
    line-height: 20px;
    font-size: 18px;

    i {
      font-size: 20px;
      height: 20px;
      margin-right: 5px;
    }
  }

  @include breakPoint(min) {
    margin-bottom: 30px;
  }
}
</style>
