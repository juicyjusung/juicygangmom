<template>
  <span class="a-hashtag">{{ hashtagValue }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Hashtag extends Vue {
  @Prop({ type: String, default: '' }) hashtagValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';

.a-hashtag {
  padding: 4px;
  margin: 4px 4px;
  background: #f4f5f8;
  border-radius: 3px;
  color: #a0a5ae;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
}
</style>
