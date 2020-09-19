<template>
  <span class="a-statistics__value">
    {{ value }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Value extends Vue {
  @Prop({ type: [String, Number], default: '' }) value!: string | number;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-statistics__value {
  margin: 0 4px;
  color: #444951;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    font-size: 40px;
  }
}
</style>
