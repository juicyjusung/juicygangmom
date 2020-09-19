<template>
  <div class="m-review__footer">
    <div class="hashtag">
      <Hashtag
        v-for="(item, index) in hashtags"
        :key="index"
        :hashtag-value="item"
      ></Hashtag>
    </div>
    <div class="writer">
      <WriterName :writer-name-value="writerNameValue" />
      <WriterAvatar />
    </div>
    <div class="info">
      <ChipRecommend :recommended="recommended"></ChipRecommend>
      <CreatedDate :created-date-value="createdDateValue" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Hashtag from '~/components/review/reviews/atoms/Hashtag.vue';
import WriterAvatar from '~/components/review/reviews/atoms/WriterAvatar.vue';
import WriterName from '~/components/review/reviews/atoms/WriterName.vue';
import ChipRecommend from '~/components/review/reviews/atoms/ChipRecommend.vue';
import CreatedDate from '~/components/review/reviews/atoms/CreatedDate.vue';

@Component({
  components: { CreatedDate, ChipRecommend, WriterName, WriterAvatar, Hashtag },
})
export default class ReviewFooter extends Vue {
  @Prop({ type: Array, default: [] }) hashtags!: [string];
  @Prop({ type: String, default: '' }) writerNameValue!: string;
  // RecommendChip
  @Prop({ type: Boolean, default: true }) recommended!: boolean;
  @Prop({ type: String, default: '' }) createdDateValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.m-review__footer {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @include desktop {
    justify-content: flex-start;
  }

  .hashtag {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
    @include desktop {
      order: 2;
    }
  }
  .writer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
    @include desktop {
      flex-direction: row-reverse;
      order: 1;
    }
  }
  .info {
    display: none;
    order: 3;
    @include desktop {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 4px;
    }
    &__recommend {
      flex: none;
      align-self: center;
      padding: 4px;
      margin: 0 4px;
      background: #5ede6b;
      border-radius: 3px;
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
    &__date {
      align-self: center;
      margin: 0 4px;
      color: #bfc3ca;
      font-size: 16px;
      line-height: 150%;
    }
  }
}
</style>
