<template>
  <article class="t-statistics">
    <StatisticCard
      title-value="별점 평균"
      chip-type="star"
      :statistic-value="statistics.starAvg.toFixed(1)"
      unit-value="/5"
    />
    <StatisticCard
      title-value="별점 비율"
      chip-type="value"
      :chip-value="`${maximumStarRate.star}점`"
      chip-color="yellow"
      :statistic-value="maximumStarRate.rate"
      unit-value="%"
    />
    <StatisticCard
      title-value="추천 비율"
      chip-type="value"
      :chip-value="`추천`"
      chip-color="green"
      :statistic-value="statistics.recommendedRate"
      unit-value="%"
    />
  </article>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import { Statistics } from '~/types/Statistics';
import Title from '~/components/review/statistics/atoms/Title.vue';
import ChipStar from '~/components/review/statistics/atoms/StarChip.vue';
import Value from '~/components/review/statistics/atoms/Value.vue';
import Unit from '~/components/review/statistics/atoms/Unit.vue';
import ChipValue from '~/components/review/statistics/atoms/ValueChip.vue';
import StatisticCardBody from '~/components/review/statistics/molecules/StatisticCardBody.vue';
import StatisticCard from '~/components/review/statistics/organisms/StatisticCard.vue';

@Component({
  components: {
    StatisticCard,
    StatisticCardBody,
    ChipValue,
    Unit,
    Value,
    ChipStar,
    Title,
  },
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
    const arr = Object.values(starRates) as [number];
    const totalRates = arr.reduce((acc: number, cur: number) => acc + cur, 0);
    const sorted = Object.entries(starRates).sort((a: any, z: any) => z[1] - a[1]) as [
      [string, number]
    ];
    return { star: sorted[0][0], rate: ((sorted[0][1] / totalRates) * 100).toFixed(1) };
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.t-statistics {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #e5e6ec;
  border-radius: 20px;
  @include desktop {
    background: none;
  }
}
</style>
