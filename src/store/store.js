import Vue from 'vue';
import Vuex from 'vuex';

import taskModules from './modules/taskModules'

// import * as actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    quadrant_1: [],
    quadrant_2: [],
    quadrant_3: [],
    quadrant_4: [],
    task: {},
    tasks: [],
    userTasks: []
  },
  modules: {
    taskModules
  }
})

export default store;
