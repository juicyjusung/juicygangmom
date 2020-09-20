<template>
  <div class="m-require-auth">
    <AuthText :auth-text-value="authTextValue" />
    <Button
      value="리뷰쓰기"
      prefix-icon="icon-write"
      color="red"
      class="m-require-auth__btn"
      padding="23px"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import AuthText from '~/components/review/reviews/atoms/AuthText.vue';
import Button from '~/components/common/atoms/Button.vue';

@Component({
  components: { Button, AuthText },
})
export default class RequireAuth extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) authTextValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.m-require-auth {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.m-require-auth__btn {
  margin-top: 40px;
  width: 146px;
  @include desktop {
    width: 318px;
  }
}
</style>
