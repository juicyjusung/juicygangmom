<template>
  <div class="o-review__container">
    <!-- Review Card-->
    <div class="o-review__item" :class="isShow || 'o-review__item--blur'">
      <ReviewHeader
        :recommended="review.recommended"
        :created-date-value="parseDateString(review.createdAt)"
      ></ReviewHeader>
      <RatingStars class="o-review__rating" :rating-num="review.rating"></RatingStars>
      <ReviewBody
        :heading-value="review.title"
        :content-body-value-pros="review.pros"
        :content-body-value-cons="review.cons"
      />
      <ReviewFooter
        :hashtags="[review.startGrade, review.courseTerm]"
        :writer-name-value="review.writer"
        :recommended="review.recommended"
        :created-date-value="parseDateString(review.createdAt)"
      />
    </div>
    <!-- Required Auth-->
    <div v-if="!isShow" class="o-review__require-auth">
      <RequireAuth
        :auth-text-value="`하나의 리뷰만 쓰셔도!<br />강남엄마의 모든 리뷰들을
      확인하실 수 있습니다`"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import RatingStars from '~/components/review/reviews/molecules/RatingStars.vue';
import { Review } from '~/types/Review';
import ReviewChip from '~/components/review/reviews/atoms/ChipRecommend.vue';
import CreatedDate from '~/components/review/reviews/atoms/CreatedDate.vue';
import ReviewHeading from '~/components/review/reviews/atoms/ReviewHeading.vue';
import ContentHeader from '~/components/review/reviews/atoms/ContentHeader.vue';
import ContentBody from '~/components/review/reviews/atoms/ContentBody.vue';
import ReviewBody from '~/components/review/reviews/molecules/ReviewBody.vue';
import Hashtag from '~/components/review/reviews/atoms/Hashtag.vue';
import WriterName from '~/components/review/reviews/atoms/WriterName.vue';
import WriterAvatar from '~/components/review/reviews/atoms/WriterAvatar.vue';
import ReviewFooter from '~/components/review/reviews/molecules/ReviewFooter.vue';
import ReviewHeader from '~/components/review/reviews/molecules/ReviewHeader.vue';
import AuthText from '~/components/review/reviews/atoms/AuthText.vue';
import Button from '~/components/common/atoms/Button.vue';
import RequireAuth from '~/components/review/reviews/molecules/RequireAuth.vue';

@Component({
  components: {
    RequireAuth,
    Button,
    AuthText,
    ReviewHeader,
    ReviewFooter,
    WriterAvatar,
    WriterName,
    Hashtag,
    ReviewBody,
    ContentBody,
    ContentHeader,
    ReviewHeading,
    CreatedDate,
    ReviewChip,
    RatingStars,
  },
})
export default class ReviewItem extends Vue {
  /******************************************************************
   * Props & Emit
   * ****************************************************************/
  @Prop(Object) readonly review!: Review;
  @Prop(Boolean) readonly isShow!: boolean;

  /******************************************************************
   * Life Cycles
   * ****************************************************************/
  private created() {}

  /******************************************************************
   * Methods
   * ****************************************************************/
  private parseDateString(date: string) {
    // '2020-08-25T14:30' => 2020-08-25
    return date.replace(/(\d\d\d\d-\d\d-\d\d).*/, '$1');
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.o-review__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.o-review__item {
  width: 100%;
  padding: 20px;

  &--blur {
    filter: blur(10px);
  }
}

.review__rating {
  margin-top: 12px;
}

.o-review__require-auth {
  position: absolute;
  flex: 1;
  width: 100%;
  @include desktop {
    width: 517px;
  }
}
</style>
