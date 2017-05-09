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
          >
          Sort By Id
        </button>
        <ul>
          <li
            v-for="task in tasks"
            :key="task.id"
            >
            {{ task.name }}
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
            <hr/>
          </li>
        </ul>
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
  export default {
    data () {
      return {
        taskIdSort: true,
        taskNameSort: false,
        }
      },
    computed: {
      tasks() {
        return this.$store.getters.tasks;
      }
    },
    methods: {
      ...mapActions({
        sortTaskById: 'sortTaskById',
        sortTaskByName: 'sortTaskByName'
      }),
      idSort(){
        console.log('sortTaskById');
        console.log(this.taskIdSort);
        console.log(this.taskNameSort);
        this.sortTaskById();
        this.taskIdSort = !this.taskIdSort;
        this.taskNameSort = !this.taskNameSort;
      },
      nameSort(){
        console.log('sortTaskByName');
        console.log(this.taskIdSort);
        console.log(this.taskNameSort);
        this.sortTaskByName();
        this.taskNameSort = !this.taskNameSort;
      },
      editTask(data){
        console.log(data);
      },
      deleteTask(task){
        console.log('delete task');
      }
    }
  }
</script>
