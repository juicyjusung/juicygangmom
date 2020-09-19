<template>
  <span class="a-rating__stars">
    <i
      v-for="(item, index) in getRatingStars(ratingNum)"
      :key="index"
      class="icon-star2"
      :class="item ? 'icon-star2--on' : 'icon-star2--off'"
    ></i>
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Stars extends Vue {
  @Prop({ type: Number, default: 5 }) ratingNum!: number;
  getRatingStars(n: number) {
    return [...Array(5)].map((v, i) => i < n);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-rating__stars {
  font-size: 20px;
  @include desktop {
    font-size: 22px;
  }
}
.icon-star2 {
  &--on {
    color: #ffd80b;
  }
  &--off {
    color: #c4c4c4;
  }
}
</style>
