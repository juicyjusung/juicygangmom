<template>
  <a :class="`a-btn a-btn--${color} link`"> <i :class="prefixIcon"></i>{{ value }} </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Scafold extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) color!: string;
  @Prop({ type: String, default: '' }) readonly prefixIcon!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-btn {
  cursor: pointer;
  width: 145px;
  padding: 15px 0px;
  margin-top: 40px;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  line-height: 150%;
  @include desktop {
  }
  &--red {
    background: #ff583f;
  }
}
</style>
