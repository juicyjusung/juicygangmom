<template>
  <span :class="`a-content__header a-content__header--${contentHeaderType}`">
    <i :class="`icon-${contentHeaderType}`" />{{ contentHeaderValue }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ContentHeader extends Vue {
  @Prop({ type: String, default: '' }) contentHeaderType!: string;
  @Prop({ type: String, default: '' }) contentHeaderValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-content__header {
  font-size: 12px;
  font-weight: 800;
  line-height: 14px;
  @include desktop {
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
</style>
