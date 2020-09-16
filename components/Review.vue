<template>
  <div class="review_container">
    <div class="review_info reverse-wrap row items-center justify-between">
      <span class="review_info_recommend blue">추천함</span>
      <span class="review_info_date">2020-09-14</span>
    </div>
    <div class="review_rating flex row">
      <div class="review_rating_stars">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M8.11602 1.53746C8.438 0.666421 9.66998 0.666423 9.99196 1.53746L11.4671 5.52809C11.6063 5.90464 11.9572 6.16145 12.3582 6.18027L16.5741 6.37817C17.4908 6.4212 17.8703 7.57292 17.1587 8.15244L13.8328 10.8613C13.5269 11.1104 13.3961 11.5161 13.4988 11.897L14.621 16.0586C14.8616 16.9512 13.8661 17.6644 13.0983 17.1494L9.6111 14.8099C9.2741 14.5838 8.83388 14.5838 8.49688 14.8099L5.00965 17.1494C4.2419 17.6644 3.24633 16.9512 3.48702 16.0586L4.60917 11.897C4.71188 11.5161 4.58105 11.1104 4.27517 10.8613L0.949229 8.15244C0.237699 7.57292 0.617193 6.4212 1.53385 6.37817L5.74981 6.18027C6.15082 6.16145 6.5017 5.90464 6.64089 5.52809L8.11602 1.53746Z"
            fill="#FFD80B"
          />
        </svg>
      </div>
      <div class="review_rating_score">별별</div>
    </div>
    <div class="review_contents">
      <div class="review_contents_speciality">“자체교재가 매우 좋은편이며 고등수학 강의가 좋다."</div>
      <div class="review_contents_comment flex column">
        <span class="comment_title flex row items-center">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M0.5 8C0.5 3.83333 3.83333 0.5 8 0.5C12.1667 0.5 15.5 3.83333 15.5 8C15.5 12.1667 12.1667 15.5 8 15.5C3.83333 15.5 0.5 12.1667 0.5 8ZM2.16667 8C2.16667 11.25 4.75 13.8333 8 13.8333C11.25 13.8333 13.8333 11.25 13.8333 8C13.8333 4.75 11.25 2.16667 8 2.16667C4.75 2.16667 2.16667 4.75 2.16667 8ZM7.16667 5.91667C7.16667 6.60702 6.79357 7.16667 6.33333 7.16667C5.8731 7.16667 5.5 6.60702 5.5 5.91667C5.5 5.22631 5.8731 4.66667 6.33333 4.66667C6.79357 4.66667 7.16667 5.22631 7.16667 5.91667ZM10.5 5.91667C10.5 6.60702 10.1269 7.16667 9.66667 7.16667C9.20643 7.16667 8.83333 6.60702 8.83333 5.91667C8.83333 5.22631 9.20643 4.66667 9.66667 4.66667C10.1269 4.66667 10.5 5.22631 10.5 5.91667ZM11.4999 7.99969C11.0833 7.91636 10.5833 8.16636 10.4999 8.58302C10.1666 9.83302 9.08326 10.4164 7.99992 10.4164C6.83326 10.4164 5.74992 9.74969 5.49992 8.58302C5.33326 8.16636 4.91659 7.91636 4.49992 7.99969C3.99992 8.16636 3.74992 8.58302 3.83326 8.99969C4.41659 11.1664 6.24992 12.1664 7.99992 12.1664C9.74992 12.1664 11.5833 11.1664 12.1666 8.99969C12.2499 8.58302 11.9999 8.16636 11.4999 7.99969Z"
              fill="#6ECD56"
            />
          </svg>
          좋은점
        </span>
        <div class="comment_content">
          오랜 시간 검증된 커리큘럼으로 학원 시스템에 충실히 임하면 기본 실력 쌓기 좋습니다. 유치부부터 연계하여
          저학년까지 다니기 양호합니다 강동,
        </div>
      </div>
      <div class="review_contents_comment flex column">
        <div class="comment_title">
          <div>아이콘</div>
          <span class="comment_title flex row items-center">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0.5 8C0.5 3.83333 3.83333 0.5 8 0.5C12.1667 0.5 15.5 3.83333 15.5 8C15.5 12.1667 12.1667 15.5 8 15.5C3.83333 15.5 0.5 12.1667 0.5 8ZM2.16667 8C2.16667 11.25 4.75 13.8333 8 13.8333C11.25 13.8333 13.8333 11.25 13.8333 8C13.8333 4.75 11.25 2.16667 8 2.16667C4.75 2.16667 2.16667 4.75 2.16667 8ZM7.16667 5.91667C7.16667 6.60702 6.79357 7.16667 6.33333 7.16667C5.8731 7.16667 5.5 6.60702 5.5 5.91667C5.5 5.22631 5.8731 4.66667 6.33333 4.66667C6.79357 4.66667 7.16667 5.22631 7.16667 5.91667ZM10.5 5.91667C10.5 6.60702 10.1269 7.16667 9.66667 7.16667C9.20643 7.16667 8.83333 6.60702 8.83333 5.91667C8.83333 5.22631 9.20643 4.66667 9.66667 4.66667C10.1269 4.66667 10.5 5.22631 10.5 5.91667ZM11.4999 7.99969C11.0833 7.91636 10.5833 8.16636 10.4999 8.58302C10.1666 9.83302 9.08326 10.4164 7.99992 10.4164C6.83326 10.4164 5.74992 9.74969 5.49992 8.58302C5.33326 8.16636 4.91659 7.91636 4.49992 7.99969C3.99992 8.16636 3.74992 8.58302 3.83326 8.99969C4.41659 11.1664 6.24992 12.1664 7.99992 12.1664C9.74992 12.1664 11.5833 11.1664 12.1666 8.99969C12.2499 8.58302 11.9999 8.16636 11.4999 7.99969Z"
                fill="#6ECD56"
              />
            </svg>
            아쉬운점
          </span>
        </div>
        <div class="comment_content">
          "초4때 T선생님이 과제 확인도 제대로 안하고 수업시간에 답만 대강 불러주고 시간도 다 안채웠어요. 시간떼우다
          오고요. 두 달간 당황스러워서 옮기려고 했어요. 아이랑 많이 고민하다가 설명회 듣고 학년이 올라가면서 선생님이
          바뀌어서 계속 공부했어요. 관계자분이 이 글을 보셨으면 좋겠네요^^
        </div>
      </div>
      <div class="review_content_footer flex row justify-between">
        <span class="hashtags">
          <span class="review_hashtag">초1</span>
          <span class="review_hashtag">1년 이상</span>
        </span>
        <span class="auth">잘난 캥거루</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Review extends Vue {}
</script>

<style lang="scss" scoped>
.review_container {
  background: #c9c9c9;
  border-radius: 20px;
  padding: 20px;
}
.review_info_recommend {
  background: #1fe233;
  border-radius: 50px;
  padding: 6px 12px;
}
.review_info_date {
  color: #bfc3ca;
}

.review_contents_speciality {
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 150%;
}
.comment_content {
  font-family: NanumSquareRound, serif;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 200%;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.review_content_footer {
}
.review_hashtag {
  color: #a0a5ae;
  font-weight: bold;
  font-size: 10px;
  line-height: 150%;
}
</style>
