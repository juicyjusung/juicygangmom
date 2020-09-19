<template>
  <div class="o-statistics__item">
    <Title :value="titleValue"></Title>
    <StatisticCardBody
      :chip-type="chipType"
      :chip-value="chipValue"
      :chip-color="chipColor"
      :statistic-value="statisticValue"
      :unit-value="unitValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Title from '~/components/statistics/atoms/Title.vue';
import StatisticCardBody from '~/components/statistics/molecules/StatisticCardBody.vue';

@Component({
  components: { StatisticCardBody, Title },
})
export default class StatisticCard extends Vue {
  // Title
  @Prop({ type: String, default: '' }) titleValue!: string;
  // ChipStar, ChipValue
  @Prop({ type: String, default: 'value' }) chipType!: string;

  // ChipValue
  @Prop({ type: [String, Number], default: '0' }) chipValue!: string | number;
  @Prop({ type: String, default: '' }) chipColor!: string;

  // Statistic Card Body Value
  @Prop({ type: [String, Number], default: '0' }) statisticValue!: string | number;

  // Statistic Card Body Unit
  @Prop({ type: String, default: '' }) unitValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.o-statistics__item {
  display: flex;
  flex: 1 1 33.33%;
  flex-direction: column;
  justify-content: flex-start;
  padding: 16px 0;
  @include desktop {
    background-color: #e5e6ec;
    border-radius: 20px;
    &:not(:first-child) {
      margin-left: 16px;
    }
  }
}
</style>
