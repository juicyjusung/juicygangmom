<template>
  <span class="a-require-auth__text" v-html="authTextValue"> </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class AuthText extends Vue {
  @Prop({ type: String, default: '' }) authTextValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.a-require-auth__text {
  color: #444951;
  text-align: center;
  font-size: 24px;
  font-weight: 800;
  line-height: 150%;
}
</style>
