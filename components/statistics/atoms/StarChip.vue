<template>
  <img class="a-statistics__staricon" src="@/assets/icon/Star.png" />
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class StarChip extends Vue {}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-statistics__staricon {
  width: 32px;
  height: 32px;
  margin-top: -8px;
  @include desktop {
    width: 40px;
    height: 40px;
  }
}
</style>
