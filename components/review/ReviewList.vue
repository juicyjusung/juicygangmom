<template>
  <div class="reviews__wrapper">
    <!--  for mobile-->
    <div v-if="isMobile" class="reviews__card">
      <Carousel class="review_carousel" :per-page="1">
        <slide v-for="(item, index) in reviews" :key="index">
          <ReviewItem :review="item" :is-show="isLoggedin || index === 0"></ReviewItem>
        </slide>
      </Carousel>
    </div>

    <!--  for PC-->
    <div v-if="!isMobile">
      <!-- for loggined user-->
      <div v-if="isLoggedin">
        <div class="reviews__card">
          <div v-for="(item, index) in reviews" :key="index + 'pc'" class="reviews__item">
            <ReviewItem
              :review="item"
              :is-show="isLoggedin"
              class="reviews__item"
            ></ReviewItem>
          </div>
        </div>
      </div>
      <!-- for not loggined user-->
      <div v-else>
        <ReviewItem
          :review="reviews[0]"
          :is-show="true"
          class="reviews__card"
        ></ReviewItem>
        <div class="reviews__card">
          <div
            v-for="(item, index) in reviews.slice(1, reviews.length)"
            :key="index + 'pc'"
          >
            <ReviewItem
              :review="item"
              :is-show="isLoggedin"
              class="reviews__item"
            ></ReviewItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop } from 'vue-property-decorator';
// @ts-ignore
import { Carousel, Slide } from 'vue-carousel';
import { State } from 'vuex-class';
import PageBase from '~/pages/PageBase';
import { Review } from '~/types/Review';
import ReviewItem from '~/components/review/ReviewItem.vue';

@Component({
  components: {
    ReviewItem,
    Carousel,
    Slide,
  },
})
export default class ReviewList extends PageBase {
  /******************************************************************
   * Store
   * ****************************************************************/
  @State('isLoggedin', { namespace: 'user' }) isLoggedin!: boolean;
  private getReviews!: (academyId: number) => any;
  /******************************************************************
   * Props & Emit
   * ****************************************************************/
  @Prop(Array) readonly reviews!: Review[];

  /******************************************************************
   * Life Cycles
   * ****************************************************************/

  private async created() {}

  /******************************************************************
   * Methods
   * ****************************************************************/
}
</script>

<style lang="scss" scoped>
.reviews__card {
  margin: 8px 0;
  background: #ffffff;
  border-radius: 20px;
}
.reviews__item {
  &:not(:first-child) {
    border-top: 1px solid rgba(0, 0, 0, 0.05);
  }
}
</style>

<style lang="scss">
.VueCarousel-dot-container {
  margin-top: 0 !important;
}
</style>
