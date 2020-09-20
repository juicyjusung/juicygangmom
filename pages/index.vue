<template>
  <section class="grid">
    <div class="reviews__container">
      <ReviewsHeder :total-elements="totalElements" />
      <Statistic :statistics="statistics"></Statistic>
      <Reviews :reviews="reviews"></Reviews>
      <ReviewsFooter :total-elements="totalElements" />
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Statistic from '~/components/review/statistics/Statistic.vue';
import Reviews from '~/components/review/reviews/Reviews.vue';
import PageBase from '~/pages/PageBase';
import { ReviewModel } from '~/types/Review';
import ReviewsFooter from '~/components/review/reviews/molecules/ReviewsFooter.vue';
import ReviewsHeder from '~/components/review/reviews/molecules/ReviewsHeder.vue';

@Component({
  components: { ReviewsHeder, ReviewsFooter, Reviews, Statistic },
  async asyncData({ store }) {
    const [reviewsData, statisticsData] = await Promise.all([
      store.dispatch('review/getReviews', 1),
      store.dispatch('review/getStatistics', 1),
    ]);
    return {
      totalElements: reviewsData.reviewsMeta.totalElements,
      reviews: reviewsData.reviews,
      statistics: statisticsData,
    };
  },
})
export default class Index extends PageBase {
  /******************************************************************
   * Props & Emit
   * ****************************************************************/

  /******************************************************************
   * Variable
   * ****************************************************************/
  private reviews: ReviewModel[] = [];
  private totalElements: number = 0;
  private statistics: Statistic | null = null;

  /******************************************************************
   * Life Cycles
   * ****************************************************************/

  private async created() {}

  /******************************************************************
   * Methods
   * ****************************************************************/
}
</script>

<style lang="scss">
@import '@/assets/styles/mixin';
.grid {
  margin: 0 auto;
  width: 100%;
  display: grid;
  max-width: 1040px;
  grid-template-columns: 0 repeat(4, 1fr) 0;
  column-gap: 8px;
  @include desktop {
    grid-template-columns: 0 repeat(12, 1fr) 0;
    column-gap: 4px;
  }
}
.reviews__container {
  grid-column: 2 / span 4;
  @include desktop {
    grid-column: 2 / span 12;
  }
}
</style>
