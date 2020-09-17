import { Module, VuexModule, Action, Mutation } from 'vuex-module-decorators';

@Module({
  name: 'user',
  stateFactory: true,
  namespaced: true,
})
export default class ReviewModule extends VuexModule {
  isLoggedin: boolean = false;

  @Mutation
  setUser(payload: boolean) {
    this.isLoggedin = payload;
  }

  @Action
  login() {
    this.context.commit('setUser', true);
  }

  @Action
  logout() {
    this.context.commit('setUser', false);
  }
}
