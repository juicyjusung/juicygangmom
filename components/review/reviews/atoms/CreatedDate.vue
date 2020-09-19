<template>
  <span class="a-review__date">
    {{ createdDateValue }}
  </span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class CreatedDate extends Vue {
  @Prop({ type: String, default: '' }) createdDateValue!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
.a-review__date {
  color: #bfc3ca;
  font-size: 12px;
  margin-left: 8px;
  font-weight: bold;
  line-height: 150%;
}
</style>
