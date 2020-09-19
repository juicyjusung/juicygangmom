<template>
  <div class="review__header">
    <ChipRecommend :recommended="recommended" />
    <CreatedDate :created-date-value="createdDateValue" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ChipRecommend from '~/components/review/reviews/atoms/ChipRecommend.vue';
import CreatedDate from '~/components/review/reviews/atoms/CreatedDate.vue';

@Component({
  components: { CreatedDate, ChipRecommend },
})
export default class Scafold extends Vue {
  @Prop({ type: Boolean, default: true }) recommended!: boolean;
  @Prop({ type: String, default: '' }) createdDateValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.review__header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  @include desktop {
    display: none;
    border-bottom: none;
  }
}
</style>
