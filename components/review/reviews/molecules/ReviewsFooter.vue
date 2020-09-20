<template>
  <div class="m-reviews__btn-wrapper">
    <Button
      color="red"
      prefix-icon="icon-write"
      value="리뷰쓰기"
      class="m-reviews__btn"
    />
    <Button
      color="gray"
      :value="`리뷰 ${totalElements}개 전체보기`"
      class="m-reviews__btn"
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
  cursor: pointer;
  font-weight: 800;
  font-size: 12px;
  padding: 23px 0;
  text-align: center;
  border-radius: 20px;
  margin: 5px 0;
  @include desktop {
    font-size: 16px;
  }
  &--red {
    color: #ffffff;
    background: #ff583f;
  }
  &--gray {
    color: #727884;
    background: #e5e6ec;
  }
}
</style>
