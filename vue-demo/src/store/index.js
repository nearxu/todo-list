import Vue from 'vue'
import Vuex from 'vuex'
import { USER_LOGIN, USER_LOOUT } from '../config/type';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    token: null
  },
  mutations: {
    [USER_LOGIN]: (state, data) => {

    }
  }
})