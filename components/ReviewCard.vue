<template>
  <div class="review_container">
    <div class="review_info items-center">
      <span class="green_chip">추천함</span>
      <span class="review_info_date">{{ review.createdAt.replace(/(\d\d\d\d-\d\d-\d\d).*/, '$1') }}</span>
    </div>
    <div class="review_rating flex row">
      <div class="review_rating_score">
        <RatingStars :rating-num="3.0"></RatingStars>
      </div>
    </div>
    <!-- review contents -->

    <div class="review_contents">
      <p class="review_contents_title">{{ `"${review.title}"` }}</p>
      <div class="review_contents_comment flex column">
        <div class="comment_title color_pros"><i class="icon-pros"></i>좋은점</div>
        <div class="comment_content">
          {{ review.pros }}
        </div>
      </div>
      <div class="review_contents_comment flex column">
        <div class="comment_title color_cons"><i class="icon-cons"></i>아쉬운점</div>
        <div class="comment_content">
          {{ review.cons }}
        </div>
      </div>
    </div>
    <!-- footer -->
    <div class="review_footer">
      <span class="review_footer_info">
        <span class="footer_info_recommend">추천함</span>
        <span class="footer_info_date">{{ review.createdAt.replace(/(\d\d\d\d-\d\d-\d\d).*/, '$1') }}</span>
      </span>
      <div class="review_hashtags">
        <span class="review_hashtag">{{ review.startGrade }}</span>
        <span class="review_hashtag">{{ review.courseTerm }}</span>
      </div>
      <div class="review_user">{{ review.writer }}</div>
      <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <rect x="0.125" width="25" height="25" rx="12.5" fill="white" />
          <circle cx="12.625" cy="8.33334" r="5" fill="#CDD1D5" />
          <circle cx="12.625" cy="25.8333" r="10.8333" fill="#CDD1D5" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect x="0.125" width="25" height="25" rx="12.5" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import RatingStars from '~/components/common/RatingStars.vue';
import { Review } from '~/types/Review';

@Component({
  components: { RatingStars },
})
export default class ReviewCard extends Vue {
  @Prop(Object) readonly review!: Review;
  // private review = {
  //   id: 60589,
  //   title: '자기주도성을 바탕으로 열공하는 학생과 열의있는 강사의 조합이 두드러지는 학원',
  //   academy_id: 96,
  //   academy_name: 'ILE 대치점',
  //   academy_logo: 'https://s3.ap-northeast-2.amazonaws.com/gangmomse/academy/profile/logos/lg_gn_96.png',
  //   start_grade: '초1',
  //   subject: '영어',
  //   course_term: '1년 이상',
  //   created_at: '2020-08-25T14:30',
  //   class_name: '교포 정규수업',
  //   teacher_name: 'Noah T.',
  //   pros: '영어 4대 영역 채우기에 그만이다. 적극적으로 수업에 임하면 발화기회도 꽤 있었음.',
  //   cons: '강사마다 역량 차이가 크다.',
  //   rating: 5,
  //   writer: '배짱 좋은 아카시아',
  //   recommended: true,
  // };
}
</script>

<style lang="scss" scoped>
.review_container {
  display: flex;
  flex-direction: column;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
}
.review_info {
  display: flex;
  order: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  margin-bottom: 10px;
  padding-bottom: 16px;
}

.green_chip {
  background: #1fe233;
  color: #ffffff;
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 150%;
  border-radius: 50px;
  padding: 6px 12px;
}
.review_info_date {
  color: #bfc3ca;
}

.review_rating {
  order: 1;
  margin-top: 10px;
}
.review_contents {
  order: 3;
  display: flex;
  flex-direction: column;
  margin-top: 8px;
}
.review_contents_comment {
  margin-top: 20px;
}
.color_pros {
  color: #6ecd56;
}
.color_cons {
  color: #d95c5c;
}

.review_contents_title {
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
}
.comment_title {
  font-style: normal;
  font-weight: 800;
  font-size: 12px;
  line-height: 14px;
}
.comment_content {
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 200%;
  color: #444951;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
.review_footer {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 16px;
  order: 4;
}
.review_footer_info {
  display: none;
}
.review_hashtags {
  display: flex;
  align-items: center;
}
.review_hashtag {
  align-self: center;
  background: #f4f5f8;
  border-radius: 3px;
  color: #a0a5ae;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
  margin: 4px 4px;
  padding: 4px;
}
.footer_info_recommend {
  align-self: center;
  background: #5ede6b;
  border-radius: 3px;
  color: #ffffff;
  flex: none;
  font-size: 12px;
  font-style: normal;
  font-weight: 800;
  line-height: 150%;
  margin: 8px 0px;
  order: 4;
  padding: 4px;
}
.footer_info_date {
  font-weight: bold;
  font-size: 12px;
  line-height: 150%;
  color: #bfc3ca;
}
.review_user {
  font-weight: 800;
  font-size: 12px;
  line-height: 150%;
  color: #a0a5ae;
  margin-left: auto;
}

@media all and (min-width: 832px) {
  .review_info {
    display: none;
    border-bottom: none;
  }
  .review_rating {
    order: 1;
  }
  .review_contents {
    order: 2;
    display: flex;
    flex-direction: row;
  }
  .review_contents_title {
    flex: 2;
    font-size: 24px;
    line-height: 150%;
    color: #444951;
  }
  .review_contents_comment {
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    margin-top: 0;
    margin-left: 10px;
    padding-left: 10px;
    flex: 1;
  }
  .comment_title {
    font-style: normal;
    font-weight: 800;
    font-size: 16px;
    line-height: 150%;
  }
  .color_pros {
    color: #0acb12;
  }
  .color_cons {
    color: #f35c5c;
  }
  .comment_content {
    font-size: 16px;
    line-height: 196.83%;
    color: #585f6b;
  }
  .review_footer {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
  }
  .review_user {
    font-weight: 800;
    font-size: 12px;
    line-height: 150%;
    color: #a0a5ae;
    margin-left: 0;
  }
  .review_footer_info {
    display: inline-block;
    align-items: center;
  }
}
</style>
