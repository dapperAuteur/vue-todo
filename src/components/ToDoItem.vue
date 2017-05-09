<template>
  <div class="toDoItem">
    <h1>Message: {{ msg + '4' }}</h1>
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <h4>Name:<input
          v-model="task.name"
          class="form-control"
        /></h4>
        <h4>
          <label
            for="task.priorityQuadrant">
            Priority
          </label>
          <select
            id="priority"
            class="form-control"
            v-model="selectedPriority"
            >
            <option
              v-for="priority in priorityQuadrant"
              >
              {{ priority }}
            </option>
          </select>
        </h4>
        <h4>Due Date:<input
          v-model="task.dateDue"
          class="form-control"
        /></h4>
      </div>
      <div class="col-xs-12 col-sm-6">
        <h4>Recurring?:<input
          v-model="task.recurring"
          class="form-control"
        /></h4>
        <h4>Notes:<input
          v-model="task.notes"
          class="form-control"
        /></h4>
      </div>
    </div>
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
          priorityQuadrant: [1, 2, 3, 4],
          dateAdded: null,
          dateDue: null,
          completed: false,
          recurring: false,
          notes: ''
        },
        priorityQuadrant: [1, 2, 3, 4],
        selectedPriority: 4
      }
    },
    methods: {
      addTask() {
        console.log(this.selectedPriority);
        this.task.priorityQuadrant = this.selectedPriority;
        console.log(this.task);
        var t = this.$store.getters.tasks;
        console.log(t);
        t.push(this.task);
        console.log(t);
      }
    }
  }
</script>
