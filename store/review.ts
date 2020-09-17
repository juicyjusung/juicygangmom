import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import camelcaseKeys from 'camelcase-keys';
import { $axios } from '~/utils/api';
import { Review } from '~/types/Review';
import { API } from '~/utils/ApiUrl';
import { getApi } from '~/utils/common';

@Module({
  name: 'review',
  stateFactory: true,
  namespaced: true,
})
export default class ReviewModule extends VuexModule {
  reviews: Review[] = [];

  @Mutation
  setUsers(reviews: Review[]) {
    this.reviews = reviews;
  }

  @Action
  async getReviews(academyId: number) {
    try {
      const api = getApi(API.getReviews, { academy_id: academyId }) as string;
      const res = await $axios.$get(api);
      if (res?.data) {
        return camelcaseKeys(res.data, { deep: true });
      }
      // code, message => error handling
    } catch (e) {
      console.error(e);
    }
  }

  @Action
  async getStatistics(academyId: number) {
    try {
      const api = getApi(API.getStatistics, { academy_id: academyId }) as string;
      const res = await $axios.$get(api);
      if (res?.data) {
        return camelcaseKeys(res.data, { deep: true });
      }
      // code, message => error handling
    } catch (e) {
      console.error(e);
    }
  }
}
