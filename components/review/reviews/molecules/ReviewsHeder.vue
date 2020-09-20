<template>
  <h1 class="m-reviews__heading">
    리뷰<span class="m-heading__count">총{{ totalElements }}개</span>
  </h1>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ReviewsFooter extends Vue {
  @Prop({ type: Number, default: '' }) totalElements!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.m-reviews__heading {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 800;
  line-height: 150%;
  color: #444951;
  font-size: 24px;
  margin-bottom: 10px;
  @include desktop {
    font-size: 32px;
  }
  .m-heading__count {
    font-weight: 800;
    line-height: 150%;
    color: #a0a5ae;
    margin-left: 8px;
    font-size: 16px;
    @include desktop {
    }
  }
}
</style>
