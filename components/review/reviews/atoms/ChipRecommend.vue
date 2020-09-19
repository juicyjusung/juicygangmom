<template>
  <span
    class="a-review__recommend a-review__recommend--green"
    :class="recommended || 'a-review__recommend--red'"
  >
    {{ recommended ? '추천함' : '추천하지 않음' }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ChipRecommend extends Vue {
  // RecommendChip
  @Prop({ type: Boolean, default: true }) recommended!: boolean;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-review__recommend {
  padding: 6px 12px;
  border-radius: 50px;
  color: #ffffff;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
  &--green {
    background: #1fe233;
  }
  &__red {
    background: #ff583f;
  }
}
</style>
