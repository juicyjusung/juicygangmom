<template>
  <div class="rating">
    <span
      v-for="(item, index) in getRatingStars(ratingNum)"
      :key="index"
      class="rating__stars"
    >
      <i class="icon-star2" :class="item ? 'icon-star2--on' : 'icon-star2--off'"></i>
    </span>
    <span class="rating__score">{{ ratingNum.toFixed(1) }}</span>
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class RatingStars extends Vue {
  @Prop(Number) readonly ratingNum!: number;
  getRatingStars(n: number) {
    return [...Array(5)].map((v, i) => i < n);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
}
.rating__stars {
  font-size: 20px;
  @include desktop {
    font-size: 22px;
  }
}
.rating__score {
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  color: #444951;
  margin-left: 4px;
  @include desktop {
    font-size: 20px;
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
