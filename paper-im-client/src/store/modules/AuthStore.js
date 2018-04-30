import Vue from 'vue'
import Vuex from 'vuex'


export const AUTH_KEY = '_im_authorization_token';
/*
export const authStore = new Vuex.Store({
  state: {
    token: localStorage.getItem(AUTH_KEY),
  },
  namespaced: true,
  mutations: {
    setToken(state, payload) {
      Vue.set(state, 'token', payload);
      if (payload !== null) {
        localStorage.setItem(AUTH_KEY, payload);
      } else {
        localStorage.removeItem(AUTH_KEY);
      }
    },
  },

  actions: {
  /!*  setToken(context: AuthContext, token) {
      commit(authStore.mutations.setToken)(context, token);
    },*!/
  },

  getters: {
   /!* getToken(state: AuthState) {
      return state.token;
    },*!/
  },

  constructor() {
    if (!isEmpty(localStorage.getItem(AUTH_KEY))) {
      this.state.token = localStorage.getItem(AUTH_KEY);
    }
  },
});*/


