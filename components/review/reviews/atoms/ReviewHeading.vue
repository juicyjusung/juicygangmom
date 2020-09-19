<template>
  <span class="a-review__heading">
    {{ headingValue }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ReviewHeading extends Vue {
  // Review Heading Value
  @Prop({ type: String, default: '' }) headingValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-review__heading {
  color: #000000;
  font-size: 20px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    flex: 2;
    color: #444951;
    font-size: 24px;
    font-weight: bold;
    line-height: 150%;
  }
}
</style>
