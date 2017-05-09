<template>
  <div class="toDoItem">
    <h1>Message: {{ msg + '4' }}</h1>
    <input
      v-model="task.name"
      class="form-control"
    />
    <button
      class="btn btn-primary"
      @click="addTask">
      Add Task
    </button>
    <h2>List of Tasks</h2>
    <h3>{{ task.name }}</h3>
  </div>
</template>

<script>
  export default {
    props: ['msg'],
    data () {
      return {
        task: {
          id: null,
          name: 'enter task name',
          priorityQuadrant: null,
          dateAdded: null,
          dateDue: null,
          completed: false,
          recurring: false,
          notes: ''
        }
      }
    },
    methods: {
      addTask() {
        console.log(this.task);
      }
    }
  }
</script>
