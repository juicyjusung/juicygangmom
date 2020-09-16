<template><Review> </Review></template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Review from '~/components/Review.vue';

@Component({
  components: { Review },
})
export default class Test extends Vue {}
</script>

<style scoped></style>
