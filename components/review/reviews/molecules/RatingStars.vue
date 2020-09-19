<template>
  <div class="m-rating">
    <Stars :rating-num="ratingNum" />
    <!--    <span-->
    <!--      v-for="(item, index) in getRatingStars(ratingNum)"-->
    <!--      :key="index"-->
    <!--      class="rating__stars"-->
    <!--    >-->
    <!--      <i class="icon-star2" :class="item ? 'icon-star2&#45;&#45;on' : 'icon-star2&#45;&#45;off'"></i>-->
    <!--    </span>-->
    <RatingScore :rating-score="ratingNum.toFixed(1)" />
  </div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'nuxt-property-decorator';
import Stars from '~/components/review/reviews/atoms/Stars.vue';
import RatingScore from '~/components/review/reviews/atoms/RatingScore.vue';

@Component({
  components: { RatingScore, Stars },
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
.m-rating {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}
</style>
