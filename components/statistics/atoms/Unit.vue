<template>
  <div class="a-statistics__unit">{{ value }}</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Unit extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-statistics__unit {
  margin: 0 4px;
  color: #a0a5ae;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    font-size: 24px;
  }
}
</style>
