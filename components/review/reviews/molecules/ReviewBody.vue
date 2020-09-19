<template>
  <div class="m-review__body">
    <ReviewHeading :heading-value="headingValue" />
    <div class="m-review__content">
      <ContentHeader
        content-header-type="pros"
        content-header-value="좋은점"
      ></ContentHeader>
      <ContentBody :content-body-value="contentBodyValuePros"></ContentBody>
    </div>
    <div class="m-review__content">
      <ContentHeader
        content-header-type="cons"
        content-header-value="아쉬운점"
      ></ContentHeader>
      <ContentBody :content-body-value="contentBodyValueCons"></ContentBody>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';
import ReviewHeading from '~/components/review/reviews/atoms/ReviewHeading.vue';
import ContentHeader from '~/components/review/reviews/atoms/ContentHeader.vue';
import ContentBody from '~/components/review/reviews/atoms/ContentBody.vue';

@Component({
  components: { ContentBody, ContentHeader, ReviewHeading },
})
export default class Scafold extends Vue {
  // Review Heading Value
  @Prop({ type: String, default: '' }) headingValue!: string;
  @Prop({ type: String, default: '' }) contentBodyValuePros!: string;
  @Prop({ type: String, default: '' }) contentBodyValueCons!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.m-review__body {
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  @include desktop {
    flex-direction: row;
    align-items: flex-start;
  }
}
.m-review__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 16px;
  @include desktop {
    flex: 1;
    padding-left: 10px;
    margin-top: 0;
    margin-left: 10px;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
  }
}
</style>
