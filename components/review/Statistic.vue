<template>
  <article class="statistics">
    <div class="statistics__item">
      <span class="statistics__header">별점 평균</span>
      <div class="statistics__body">
        <img class="statistics__chip--star" src="@/assets/icon/Star.png" />
        <span class="statistics__value">
          {{ statistics.starAvg.toFixed(1) }}
        </span>
        <div class="statistics__unit">/5</div>
      </div>
    </div>
    <div class="statistics__item">
      <span class="statistics__header">별점 비율</span>
      <div class="statistics__body">
        <span class="statistics__chip statistics__chip--yellow">
          {{ maximumStarRate.star }}점
        </span>
        <span class="statistics__value">{{ maximumStarRate.rate }}</span>
        <span class="statistics__unit">%</span>
      </div>
    </div>
    <div class="statistics__item">
      <span class="statistics__header">추천 비율</span>
      <div class="statistics__body">
        <span class="statistics__chip statistics__chip--green">추천</span>
        <span class="statistics__value">
          {{ statistics.recommendedRate }}
        </span>
        <span class="statistics__unit">%</span>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Statistics } from '~/types/Statistics';

@Component({
  components: {},
})
export default class Statistic extends Vue {
  /******************************************************************
   * Props & Emit
   * ****************************************************************/
  @Prop(Object) readonly statistics!: Statistics;

  /******************************************************************
   * Variable
   * ****************************************************************/
  get maximumStarRate() {
    if (this.statistics?.starRates)
      return this.getMaximumValueObject(this.statistics.starRates);
    return { star: 0, rate: 0 };
  }

  /******************************************************************
   * Methods
   * ****************************************************************/
  getMaximumValueObject(starRates: any) {
    const sorted = Object.entries(starRates).sort((a: any, z: any) => z[1] - a[1]);
    return { star: sorted[0][0], rate: sorted[0][1] };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.statistics {
  width: 100%;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #e5e6ec;
  @include desktop {
    border-radius: 20px;
    background: none;
  }
}
.statistics__item {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1 1 33.33%;
  @include desktop {
    background-color: #e5e6ec;
    border-radius: 20px;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
}
.statistics__header {
  font-weight: 800;
  font-size: 12px;
  line-height: 150%;
  text-align: center;
  color: #444951;
  @include desktop {
    font-size: 16px;
  }
}
.statistics__body {
  flex: 1 0 61px;
  margin: 16px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  @include desktop {
    border-left: none;
  }
}

.statistics__chip {
  margin: 0 4px;
  border-radius: 100px;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  font-weight: 800;
  font-size: 12px;
  line-height: 150%;
  @include desktop {
    width: 42px;
    height: 42px;
    font-size: 16px;
    margin: 0 8px;
  }
  &--star {
    margin-top: -8px;
    height: 32px;
    width: 32px;
    @include desktop {
      height: 40px;
      width: 40px;
    }
  }
  &--yellow {
    background: #ffbb01;
  }
  &--green {
    background: #5ede6b;
  }
}
.statistics__value {
  margin: 0 4px;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  color: #444951;
  @include desktop {
    font-size: 40px;
  }
}
.statistics__unit {
  margin: 0 4px;
  font-weight: 800;
  font-size: 16px;
  line-height: 150%;
  color: #a0a5ae;
  @include desktop {
    font-size: 24px;
  }
}
</style>
