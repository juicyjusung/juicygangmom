<template>
  <div class="app">
    <button @click="login">로그인</button>
    <button @click="logout">로그아웃</button>
    <div class="container">
      <Nuxt />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';
import { Action } from 'vuex-class';

@Component({
  components: {},
})
export default class App extends Vue {
  /******************************************************************
   * Store
   * ****************************************************************/
  @Action('login', { namespace: 'user' })
  private login!: () => void;

  @Action('logout', { namespace: 'user' })
  private logout!: () => void;
}
</script>
<style>
html {
  font-family: 'NanumSquareRound', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
.container {
  margin: 0 auto;
  padding-top: 30px;
  min-height: 100vh;
  background: #f4f5f8;
}
</style>
