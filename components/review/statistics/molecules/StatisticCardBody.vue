<template>
  <div class="m-statistics__body">
    <StarChip v-if="chipType === 'star'" />
    <ValueChip v-else :value="chipValue" :color="chipColor" />
    <Value :value="statisticValue" />
    <Unit :value="unitValue" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ChipStar from '~/components/review/statistics/atoms/StarChip.vue';
import Value from '~/components/review/statistics/atoms/Value.vue';
import Unit from '~/components/review/statistics/atoms/Unit.vue';
import ChipValue from '~/components/review/statistics/atoms/ValueChip.vue';
import StarChip from '~/components/review/statistics/atoms/StarChip.vue';
import ValueChip from '~/components/review/statistics/atoms/ValueChip.vue';

@Component({
  components: { ValueChip, StarChip, ChipValue, Unit, Value, ChipStar },
})
export default class StatisticCardBody extends Vue {
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
.m-statistics__body {
  display: flex;
  flex: 1 0 61px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 16px 0;
  &:not(:first-child) {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
  @include desktop {
    border-left: none;
  }
}
</style>
