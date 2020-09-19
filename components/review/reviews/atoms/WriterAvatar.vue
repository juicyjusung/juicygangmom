<template>
  <img class="a-writer-avatar" src="@/assets/icon/profile.png" />
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class WriterAvatar extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-writer-avatar {
  width: 22px;
  height: 22px;
  margin: 0 4px;
  @include desktop {
    width: 25px;
    height: 25px;
  }
}
</style>
