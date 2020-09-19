<template>
  <span class="a-writer-name">{{ writerNameValue }}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class WriterName extends Vue {
  @Prop({ type: String, default: '' }) writerNameValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-writer-name {
  margin: 0 4px;
  color: #a0a5ae;
  text-align: right;
  font-size: 12px;
  font-weight: 800;
  line-height: 150%;
}
</style>
