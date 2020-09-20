<template>
  <section class="grid">
    <div class="reviews__container">
      <h1 class="reviews__heading">
        리뷰<span class="heading__count">총{{ totalElements }}개</span>
      </h1>
      <Statistic :statistics="statistics"></Statistic>
      <Reviews :reviews="reviews"></Reviews>
      <div class="reviews__btn-wrapper">
        <a class="reviews__btn reviews__btn--red"><i class="icon-write" />리뷰쓰기</a>
        <a class="reviews__btn reviews__btn--gray">리뷰{{ totalElements }}개 전체보기</a>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { Component } from 'nuxt-property-decorator';
import Statistic from '~/components/review/statistics/Statistic.vue';
import Reviews from '~/components/review/reviews/Reviews.vue';
import PageBase from '~/pages/PageBase';
import { ReviewModel } from '~/types/Review';

@Component({
  components: { Reviews, Statistic },
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

.reviews__heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 800;
  line-height: 150%;
  color: #444951;
  font-size: 24px;
  margin-bottom: 10px;
  @include desktop {
    font-size: 32px;
  }
  .heading__count {
    font-weight: 800;
    line-height: 150%;
    color: #a0a5ae;
    margin-left: 8px;
    font-size: 16px;
    @include desktop {
    }
  }
}
.reviews__btn-wrapper {
  display: flex;
  flex-direction: column;
}

.reviews__btn {
  cursor: pointer;
  font-size: 12px;
  padding: 23px 0;
  text-align: center;
  border-radius: 20px;
  margin: 5px 0;
  @include desktop {
    font-size: 16px;
  }
  &--red {
    color: #ffffff;
    background: #ff583f;
  }
  &--gray {
    color: #727884;
    background: #e5e6ec;
  }
}
</style>
