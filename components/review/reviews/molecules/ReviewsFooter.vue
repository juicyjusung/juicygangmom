<template>
  <div class="m-reviews__btn-wrapper">
    <Button
      value="리뷰쓰기"
      color="red"
      prefix-icon="icon-write"
      class="m-reviews__btn"
      padding="23px"
    />
    <Button
      :value="`리뷰 ${totalElements}개 전체보기`"
      color="gray"
      class="m-reviews__btn"
      padding="23px"
    ></Button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import Button from '~/components/common/atoms/Button.vue';

@Component({
  components: { Button },
})
export default class ReviewsFooter extends Vue {
  @Prop({ type: Number, default: '' }) totalElements!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.m-reviews__btn-wrapper {
  display: flex;
  flex-direction: column;
}

.m-reviews__btn {
  font-weight: 800;
  font-size: 12px;
  border-radius: 20px;
  margin: 5px 0;
  @include desktop {
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
