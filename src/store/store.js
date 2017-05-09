import Vue from 'vue';
import Vuex from 'vuex';

import taskModules from './modules/taskModules'

// import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    task: {},
    tasks: []
  },
  modules: {
    taskModules
  }
})

export default store;
