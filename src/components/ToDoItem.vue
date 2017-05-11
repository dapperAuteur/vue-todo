<template>
  <div class="toDoItem col-sm-6 col-md-4">
    <h3>Task Id: {{ task.id }}</h3>
    <h3>Task Name: {{ task.name }}</h3>
    <h3>Task PQ: {{ task.priorityQuadrant }}</h3>
    <h3>Task Notes: {{ task.notes }}</h3>
    <h3>Task Completed: {{ task.completed }}</h3>
    <h3>Task Recurring: {{ task.recurring }}</h3>
    <button
      class="btn btn-info"
      @click="toggleComplete"
      v-if="!this.task.completed">
      Not Completed
    </button>
    <button
      class="btn btn-primary"
      @click="toggleComplete"
      v-else>
      Completed
    </button>
    <button
      class="btn btn-warning"
      @click="editTask">
      Edit Task
    </button>
    <button
      class="btn btn-danger"
      @click="deleteTask"
      >
      Delete Task
    </button>
    <app-edit-to-do-item
      :task="task"
      v-if="editting">
    </app-edit-to-do-item>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import EditToDoItem from './EditToDoItem.vue';
  export default {
    props: [ 'task' ],
    data () {
      return {
        editting: false
      }
    },
    components: {
      appEditToDoItem: EditToDoItem,
    },
    computed: {

    },
    methods: {
      ...mapActions({
        sortTaskById: 'sortTaskById',
        sortTaskByName: 'sortTaskByName'
      }),
      idSort(){
        this.sortTaskById();
        this.taskNameSort = !this.taskNameSort;
      },
      nameSort(){
        this.sortTaskByName();
        this.taskNameSort = !this.taskNameSort;
      },
      toggleComplete(){
        this.task.completed = !this.task.completed;
        const order = this.task;
      },
      editTask(){
        const order = this.task;
        console.log(order);
        this.editting = !this.editting;
      },
      deleteTask(){
        const order = this.task;
        console.log(order);
        this.$store.dispatch('deleteTask', order);
      }
    }
  }
</script>
