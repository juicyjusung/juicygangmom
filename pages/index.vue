<template>
  <div class="grid">
    <div class="reviews__container">
      <h1 class="reviews__heading">
        리뷰<span class="heading__count">총{{ totalElements }}개</span>
      </h1>
      <Statistic :statistics="statistics"></Statistic>
      <ReviewList :reviews="reviews"></ReviewList>
      <div class="reviews__btn-wrapper">
        <a class="reviews__btn reviews__btn--red"><i class="icon-write" />리뷰쓰기</a>
        <a class="reviews__btn reviews__btn--gray">리뷰{{ totalElements }}개 전체보기</a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component } from 'vue-property-decorator';
import { Action } from 'vuex-class';
import Statistic from '~/components/review/Statistic.vue';
import ReviewList from '~/components/review/ReviewList.vue';
import PageBase from '~/pages/PageBase';
import { Review } from '~/types/Review';

@Component({
  components: { ReviewList, Statistic },
})
export default class Index extends PageBase {
  /******************************************************************
   * Store
   * ****************************************************************/
  @Action('getReviews', { namespace: 'review' })
  private getReviews!: (academyId: number) => any;

  @Action('getStatistics', { namespace: 'review' })
  private getStatistics!: (academyId: number) => Statistic;
  /******************************************************************
   * Props & Emit
   * ****************************************************************/

  /******************************************************************
   * Variable
   * ****************************************************************/
  private reviews: Review[] = [];
  private totalElements: number = 0;
  private statistics: Statistic | null = null;

  /******************************************************************
   * Life Cycles
   * ****************************************************************/

  private async created() {
    await this.fetchData();
  }

  /******************************************************************
   * Methods
   * ****************************************************************/
  private async fetchData() {
    const [reviewsData, statisticsData] = await Promise.all([
      this.getReviews(1),
      this.getStatistics(1),
    ]);
    this.totalElements = reviewsData.totalElements;
    this.reviews = reviewsData.content as Review[];
    this.statistics = statisticsData;
  }
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
