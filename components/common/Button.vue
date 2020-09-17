<template>
  <a
    :style="{
      ...buttonStyle,
    }"
    @click="$emit('onClick')"
  >
    <i :class="prefixIcon" />{{ label }}
  </a>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Button extends Vue {
  @Prop(Object) readonly customStyle!: object;
  @Prop(String) readonly prefixIcon!: string;
  @Prop({ type: String, default: '#FFFFFF' }) readonly color!: string;
  @Prop({ type: String, default: '#E5E6EC' }) readonly backgroundColor!: string;
  @Prop({ type: String, default: '0px' }) readonly margin!: string;
  @Prop({ type: [String, Number], default: '10px' }) readonly borderRadius?:
    | string
    | number;

  @Prop({ type: [String, Number], default: 16 }) readonly fontSize?: string | number;
  @Prop(String) readonly label!: string;

  get buttonStyle() {
    return {
      cursor: 'pointer',
      textAlign: 'center',
      borderRadius: Number(this.borderRadius)
        ? `${this.borderRadius}px`
        : this.borderRadius,
      ...this.customStyle,
      color: this.color,
      backgroundColor: this.backgroundColor,
      // fontSize: `${this.fontSize}px`,
      padding: '23px 0',
      margin: this.margin,
    };
  }
}
</script>

<style lang="scss" scoped></style>
