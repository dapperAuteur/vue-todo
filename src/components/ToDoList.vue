<template>
  <div class="todoList">
    <div class="undone">
      <h3>These Items Are Not Completed</h3>
    </div>
    <h2>To Do List</h2>
    <div>
      <div>
        <button
          class="btn btn-info"
          @click="nameSort"
          v-if="!taskNameSort"
          >
          Sort By Name
        </button>
        <button
          class="btn btn-primary"
          @click="idSort"
          v-if="taskNameSort"
          :key="task.id"
          >
          Sort By Id
        </button>
        <app-to-do-item
          v-for="task in tasks"
          :task="task"
          :key="task.id"
          >
        </app-to-do-item>
      </div>

    </div>
    <h2>Completed Tasks</h2>
    <div class="done">
      <h3>These Items Are Completed</h3>
    </div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex';
  import ToDoItem from './ToDoItem.vue';
  export default {
    data () {
      return {
        taskNameSort: false
      }
    },
    components: {
      appToDoItem: ToDoItem
    },
    computed: {
      tasks() {
        return this.$store.getters.tasks;
      },
      task() {
        return this.$store.getters.task;
      }
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
      }
    }
  }
</script>
