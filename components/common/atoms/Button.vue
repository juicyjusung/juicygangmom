<template>
  <a :class="`a-btn a-btn--${color} link`"> <i :class="prefixIcon"></i>{{ value }} </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) color!: string;
  @Prop({ type: String, default: '' }) readonly prefixIcon!: string;
  @Prop({ type: String, default: '145' }) readonly width!: string | number;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-btn {
  cursor: pointer;
  padding: 15px 0px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
  }
  &--red {
    background: #ff583f;
  }
  &--gray {
    color: #727884;
    background: #e5e6ec;
  }
}
</style>
