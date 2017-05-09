import tasks from '../../data/taskList';

const state = {
  task: {},
  tasks: []
}

const mutations = {
  'SET_TASKS' (state, tasks) {
    state.tasks = tasks;
  },
  'SET_TASKS_BY_ID' (state, tasks) {
    state.tasks.sort(function(a, b) {
      return a.id - b.id;
    });
  },
  'SET_TASKS_BY_NAME' (state, tasks) {
    state.tasks.sort(function(a, b) {
      var nameA = a.name.toUpperCase();
      var nameB = b.name.toUpperCase();
      if(nameA < nameB) {
        return -1;
      }
      if(nameA > nameB) {
        return 1;
      }
      return 0;
    });
  },
  'SET_TASK' (state, task) {
    state.task = task;
  }
};

const actions = {
  initTasks: ({ commit }) => {
    commit('SET_TASKS', tasks);
  },
  sortTaskById: ({ commit }) => {
    commit('SET_TASKS_BY_ID');
  },
  sortTaskByName: ({ commit }) => {
    commit('SET_TASKS_BY_NAME');
  }
};

const getters = {
  tasks: state => {
    return state.tasks;
  },
  task: state => {
    return state.task;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
