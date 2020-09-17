import { Store } from 'vuex';
import { getModule } from 'vuex-module-decorators';
import ReviewModule from '~/store/review';
import UserModule from '~/store/user';

// eslint-disable-next-line
let reviewStore: ReviewModule;
// eslint-disable-next-line
let userStore: UserModule;

function initialiseStores(store: Store<any>): void {
  reviewStore = getModule(ReviewModule, store);
  userStore = getModule(UserModule, store);
}

export { initialiseStores, reviewStore, userStore };
