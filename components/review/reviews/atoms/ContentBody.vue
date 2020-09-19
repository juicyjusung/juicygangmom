<template>
  <span class="a-content__body">
    {{ contentBodyValue }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class ContentBody extends Vue {
  @Prop({ type: String, default: '' }) contentBodyValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-content__body {
  display: -webkit-box;
  margin-top: 4px;
  color: #444951;
  text-overflow: ellipsis;
  font-size: 12px;
  font-weight: bold;
  line-height: 200%;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  @include desktop {
    color: #585f6b;
    font-size: 16px;
    line-height: 31px;
  }
}
</style>
