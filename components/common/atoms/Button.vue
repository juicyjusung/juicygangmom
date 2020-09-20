<template>
  <a :class="`a-btn a-btn--${color} link`" :style="style">
    <i :class="prefixIcon"></i>{{ value }}
  </a>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) color!: string;
  @Prop({ type: String, default: '' }) readonly prefixIcon!: string;
  @Prop({ type: String, default: '' }) readonly width!: string | number;
  @Prop({ type: String, default: '' }) readonly padding!: string | number;
  @Prop({ type: String, default: '' }) readonly borderRadius!: string | number;

  @Emit('onClick') onCick() {}

  get style() {
    let styles = '';
    if (this.width)
      styles += `width: ${Number(this.width) ? `${this.width}px` : this.width};`;
    if (this.padding)
      styles += `padding: ${Number(this.padding) ? `${this.padding}px` : this.padding};`;
    if (this.borderRadius)
      styles += `border-radius: ${
        Number(this.borderRadius) ? `${this.borderRadius}px` : this.borderRadius
      };`;
    return styles;
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-btn {
  cursor: pointer;
  border-radius: 10px;
  color: #ffffff;
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 150%;
  @include desktop {
    border-radius: 20px;
    font-weight: 800;
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
