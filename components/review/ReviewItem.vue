<template>
  <div class="review__container">
    <!-- Review Card-->
    <div class="review__item" :class="isShow || 'review__item--blur'">
      <div class="review__header">
        <span
          class="review__recommend review__recommend--green"
          :class="review.recommended || 'review__recommend--red'"
        >
          {{ review.recommended ? '추천함' : '추천하지 않음' }}
        </span>
        <span class="review__date">
          {{ parseDateString(review.createdAt) }}
        </span>
      </div>
      <RatingStars class="review__rating" :rating-num="4"></RatingStars>
      <div class="review__body">
        <span class="review__heading">
          {{ `"${review.title}"` }}
        </span>
        <div class="review__content">
          <span class="content__header content__header--pros">
            <i class="icon-pros"></i>좋은점
          </span>
          <span class="content__body">
            {{ review.pros }}
          </span>
        </div>
        <div class="review__content">
          <span class="content__header content__header--cons">
            <i class="icon-cons"></i>아쉬운점
          </span>
          <span class="content__body">
            {{ review.cons }}
          </span>
        </div>
      </div>
      <div class="review__footer">
        <div class="hashtag">
          <span class="hashtag__item">{{ review.startGrade }}</span>
          <span class="hashtag__item">{{ review.courseTerm }}</span>
        </div>
        <div class="writer">
          <span class="writer__name">{{ review.writer }}</span>
          <img class="writer__avatar" src="@/assets/icon/profile.png" />
        </div>
        <div class="info">
          <span
            class="info__recommend info__recommend--green"
            :class="review.recommended || 'info__recommend--red'"
          >
            {{ review.recommended ? '추천함' : '추천하지 않음' }}
          </span>
          <span class="info__date">{{ parseDateString(review.createdAt) }}</span>
        </div>
      </div>
    </div>
    <!-- Required Auth-->
    <div v-if="!isShow" class="review__require-auth">
      <div class="require-auth">
        <span class="require-auth__text">
          하나의 리뷰만 쓰셔도!<br />강남엄마의 모든 리뷰들을 확인하실 수 있습니다
        </span>
        <a class="require-auth__btn require-auth__btn--red link"
          ><i class="icon-write"></i>리뷰쓰기</a
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import RatingStars from '~/components/review/RatingStars.vue';
import { Review } from '~/types/Review';

@Component({
  components: { RatingStars },
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

$review-padding: 20px;
.review__container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.review__item {
  width: 100%;
  padding: $review-padding;
  &--blur {
    filter: blur(10px);
  }
}
.review__header {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 10px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  @include desktop {
    display: none;
    border-bottom: none;
  }
}
.review__recommend {
  color: #ffffff;
  font-weight: 800;
  font-size: 12px;
  line-height: 150%;
  border-radius: 50px;
  padding: 6px 12px;
  &--green {
    background: #1fe233;
  }
  &__red {
    background: #ff583f;
  }
}
.review__date {
  font-size: 12px;
  line-height: 150%;
  color: #bfc3ca;
}
.review__rating {
  margin-top: 12px;
}

.review__body {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @include desktop {
    flex-direction: row;
    align-items: start;
  }
}
.review__heading {
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
  color: #000000;
  @include desktop {
    flex: 2;
    font-weight: bold;
    font-size: 24px;
    line-height: 150%;
    color: #444951;
  }
}
.review__content {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 16px;
  @include desktop {
    flex: 1;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    margin-left: 10px;
    margin-top: 0;
    padding-left: 10px;
  }
  .content__header {
    font-weight: 800;
    font-size: 12px;
    line-height: 14px;
    @include desktop {
      font-weight: 800;
      font-size: 16px;
      line-height: 150%;
    }
    &--pros {
      color: #6ecd56;
      @include desktop {
        color: #0acb12;
      }
    }
    &--cons {
      color: #d95c5c;
      @include desktop {
        color: #f35c5c;
      }
    }
    .icon-pros,
    .icon-cons {
      @include desktop {
        display: none;
      }
    }
  }
  .content__body {
    font-weight: bold;
    font-size: 12px;
    line-height: 200%;
    color: #444951;
    margin-top: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    @include desktop {
      font-weight: bold;
      font-size: 16px;
      line-height: 31px;
      color: #585f6b;
    }
  }
}
.review__footer {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @include desktop {
    justify-content: start;
  }

  .hashtag {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
    @include desktop {
      order: 2;
    }
    &__item {
      background: #f4f5f8;
      border-radius: 3px;
      color: #a0a5ae;
      font-size: 12px;
      font-weight: 800;
      line-height: 150%;
      margin: 4px 4px;
      padding: 4px;
    }
  }
  .writer {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 4px;
    @include desktop {
      order: 1;
      flex-direction: row-reverse;
    }
    &__name {
      margin: 0 4px;
      font-weight: 800;
      font-size: 12px;
      line-height: 150%;
      text-align: right;
      color: #a0a5ae;
    }
    &__avatar {
      width: 22px;
      height: 22px;
      margin: 0 4px;
      @include desktop {
        width: 25px;
        height: 25px;
      }
    }
  }
  .info {
    order: 3;
    display: none;
    @include desktop {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin: 0 4px;
    }
    &__recommend {
      background: #5ede6b;
      border-radius: 3px;
      flex: none;
      font-weight: 800;
      font-size: 12px;
      line-height: 150%;
      padding: 4px;
      color: #ffffff;
      align-self: center;
      margin: 0 4px;
      &--green {
        background: #1fe233;
      }
      &__red {
        background: #ff583f;
      }
    }
    &__date {
      font-size: 16px;
      line-height: 150%;
      color: #bfc3ca;
      align-self: center;
      margin: 0 4px;
    }
  }
}
.review__require-auth {
  flex: 1;
  position: absolute;
  width: 100%;
  @include desktop {
    width: 517px;
  }
  .require-auth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    &__text {
      font-weight: 800;
      font-size: 24px;
      line-height: 150%;
      text-align: center;
      color: #444951;
    }
    &__btn {
      padding: 15px 0px;
      font-weight: bold;
      font-size: 16px;
      border-radius: 10px;
      text-align: center;
      color: #ffffff;
      line-height: 150%;
      width: 145px;
      margin-top: 40px;
      @include desktop {
      }
      &--red {
        background: #ff583f;
      }
    }
  }
}
</style>
