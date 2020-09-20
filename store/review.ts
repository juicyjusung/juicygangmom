import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';
import camelcaseKeys from 'camelcase-keys';
import { Getter } from 'vuex-class';
import { $axios } from '~/utils/api';
import { Review, ReviewMeta, ReviewModel } from '~/types/Review';
import { API } from '~/utils/ApiUrl';
import { getApi } from '~/utils/common';
import { Statistics } from '~/types/Statistics';

@Module({
  name: 'review',
  stateFactory: true,
  namespaced: true,
})
export default class ReviewModule extends VuexModule {
  reviews: Review[] = [];
  reviewsMeta: ReviewMeta = { numberOfElements: 0, totalElements: 0, totalPages: 0 };
  statistics: Statistics | null = null;

  get getRecommendedReviews() {
    return this.reviews.filter(v => v.recommended);
  }

  @Mutation
  setReviews(payload: ReviewModel[]) {
    this.reviews = payload;
  }

  @Mutation
  setReviewsMeta(payload: ReviewMeta) {
    this.reviewsMeta = payload;
  }

  @Mutation
  setStatistics(payload: Statistics) {
    this.statistics = payload;
  }

  @Action
  async getReviews(academyId: number) {
    try {
      const api = getApi(API.getReviews, { academy_id: academyId }) as string;
      const res = await $axios.$get(api);
      if (res?.message === 'SUCCESS' && res?.data) {
        const camelParsedData = camelcaseKeys(res.data, { deep: true });
        const { content, numberOfElements, totalElements, totalPages } = camelParsedData;
        const reviews = content.map((data: Review) => new ReviewModel(data));
        const reviewsMeta = {
          numberOfElements,
          totalElements,
          totalPages,
        };
        this.context.commit('setReviews', reviews);
        this.context.commit('setReviewsMeta', reviewsMeta);
        return { reviews, reviewsMeta };
      } else {
        console.error('There is an error in the response data (getReviews)');
      }
    } catch (e) {
      console.error(e);
    }
  }

  @Action
  async getStatistics(academyId: number) {
    try {
      const api = getApi(API.getStatistics, { academy_id: academyId }) as string;
      const res = await $axios.$get(api);
      if (res?.message === 'SUCCESS' && res?.data) {
        const camelParsedData = camelcaseKeys(res.data, { deep: true }) as Statistics;
        this.context.commit('setStatistics', camelParsedData);
        return camelParsedData;
      } else {
        console.error('There is an error in the response data (getStatistics)');
      }
    } catch (e) {
      console.error(e);
    }
  }
}
