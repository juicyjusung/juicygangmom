<template>
  <span :class="`a-statistics__chip a-statistics__chip--${color}`">
    {{ value }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ValueChip extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
  @Prop({ type: String, default: '' }) color!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-statistics__chip {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  margin: 0 4px;
  border-radius: 100px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    width: 42px;
    height: 42px;
    margin: 0 8px;
    font-size: 16px;
  }
  &--yellow {
    background: #ffbb01;
  }
  &--green {
    background: #5ede6b;
  }
}
</style>
