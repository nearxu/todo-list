import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {
  count: 0
};

const mutations = {
  increase(state) {
    state.count++;
  },
  decrease(state) {
    state.count--;
  }
};

const actions = {
  increase: ({ commit }) => commit("increase"),
  decrease: ({ commit }) => commit("decrease")
};
const store = new Vuex.Store({
  state,
  mutations,
  actions
});

export default store;
