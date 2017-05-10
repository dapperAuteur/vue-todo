import tasks from '../../data/taskList';

const state = {
  quadrant_1: [],
  quadrant_2: [],
  quadrant_3: [],
  quadrant_4: [],
  task: {},
  tasks: [],
  userTasks: []
}

const mutations = {
  'ADD_TASK' (state, { taskId, taskName, taskPriorityQuadrant, taskDateAdded, taskDateDue, taskCompleted, taskRecurring, taskNotes }) {
    state.tasks.push({
      id: taskId,
      name: taskName,
      priorityQuadrant: taskPriorityQuadrant,
      dateAdded: taskDateAdded,
      dateDue: taskDateDue,
      completed: taskCompleted,
      recurring: taskRecurring,
      notes: taskNotes
    })
  },
  'DELETE_TASK' (state, { taskId, taskName, taskPriorityQuadrant, taskDateAdded, taskDateDue, taskCompleted, taskRecurring, taskNotes }) {
    const record = state.tasks.find(element => element.id == taskId);
    state.tasks.splice(state.tasks.indexOf(record), 1);
  },
  'SET_TASK' (state, task) {
    state.task = task;
  },
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
  'UPDATE_TASK' (state, task) {
    state.task = task;
  }
};

const actions = {
  addTask: ({ commit }, order) => {
    commit('ADD_TASK', order);
  },
  deleteTask({ commit }, order) {
    commit('DELETE_TASK', order);
  },
  initTasks: ({ commit }) => {
    commit('SET_TASKS', tasks);
  },
  updateTask: ({ commit }, order) => {
    commit('UPDATE_TASK', order);
  },
  sortTaskById: ({ commit }) => {
    commit('SET_TASKS_BY_ID');
  },
  sortTaskByName: ({ commit }) => {
    commit('SET_TASKS_BY_NAME');
  }
};

const getters = {
  quadrant_1 (state, getters) {
    return state.tasks.map(task => {
      const record = getters.tasks.find(element => element.priorityQuadrant == 1);
      return {
        id: task.id,
        name: task.name,
        priorityQuadrant: task.priorityQuadrant,
        dateAdded: task.dateAdded,
        dateDue: task.dateDue,
        completed: task.completed,
        recurring: task.recurring,
        notes: task.notes
      }
    })
  },
  quadrant_2 (state, getters) {
    return state.tasks.map(task => {
      const record = getters.tasks.find(element => element.priorityQuadrant == 2);
      return {
        id: task.id,
        name: task.name,
        priorityQuadrant: task.priorityQuadrant,
        dateAdded: task.dateAdded,
        dateDue: task.dateDue,
        completed: task.completed,
        recurring: task.recurring,
        notes: task.notes
      }
    })
  },
  quadrant_3 (state, getters) {
    return state.tasks.map(task => {
      const record = getters.tasks.find(element => element.priorityQuadrant == 3);
      return {
        id: task.id,
        name: task.name,
        priorityQuadrant: task.priorityQuadrant,
        dateAdded: task.dateAdded,
        dateDue: task.dateDue,
        completed: task.completed,
        recurring: task.recurring,
        notes: task.notes
      }
    })
  },
  quadrant_4 (state, getters) {
    return state.tasks.map(task => {
      const record = getters.tasks.find(element => element.priorityQuadrant == 4);
      return {
        id: task.id,
        name: task.name,
        priorityQuadrant: task.priorityQuadrant,
        dateAdded: task.dateAdded,
        dateDue: task.dateDue,
        completed: task.completed,
        recurring: task.recurring,
        notes: task.notes
      }
    })
  },
  task: state => {
    return state.task;
  },
  tasks: state => {
    return state.tasks;
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
