<template></template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator';

@Component({
  components: {},
})
export default class Scafold extends Vue {
  @Prop({ type: String, default: '' }) value!: string;
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/mixin';
</style>
