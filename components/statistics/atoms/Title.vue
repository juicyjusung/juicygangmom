<template>
  <span class="a-statistics__title">{{ value }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Title extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.a-statistics__title {
  color: #444951;
  text-align: center;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
  @include desktop {
    font-size: 16px;
  }
}
</style>
