import Vue from 'vue';
import Vuex from 'vuex';

import createPersistedState from 'vuex-persistedstate';
import lz from 'lz-string';

import taskModules from './modules/taskModules'

import * as actions from './action';

Vue.use(Vuex);

const store = new Vuex.Store({
  // state: {
  //   quadrant_1: [],
  //   quadrant_2: [],
  //   quadrant_3: [],
  //   quadrant_4: [],
  //   task: {},
  //   tasks: [],
  //   userTasks: []
  // },
  actions,
  modules: {
    taskModules
  },
  plugins: [
    createPersistedState({
      getState(key, path) {
        const storedState = window.localStorage.getItem(key);
        if (!storedState) return {};
        const state = lz.decompress(storedState);
        return JSON.parse(state);
      },
      setState(key, path, state) {
        const stateJSON = JSON.stringify(state);
        return window.localStorage.setItem(key, lz.compress(stateJSON));
      },
    }),
  ],
});

export default store;
