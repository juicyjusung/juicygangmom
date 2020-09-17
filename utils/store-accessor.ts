import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import ReviewModule from '~/store/review';

// eslint-disable-next-line
let reviewStore: ReviewModule;

function initialiseStores(store: Store<any>): void {
  reviewStore = getModule(ReviewModule, store);
}

export { initialiseStores, reviewStore };
