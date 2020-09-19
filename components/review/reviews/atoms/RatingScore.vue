<template>
  <span class="a-rating__score">{{ ratingScore }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class RatingScore extends Vue {
  @Prop({ type: String, default: 0 }) ratingScore!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-rating__score {
  margin-left: 4px;
  color: #444951;
  font-size: 16px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    font-size: 20px;
  }
}
</style>
