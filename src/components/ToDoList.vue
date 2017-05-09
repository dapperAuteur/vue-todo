<template>
  <div class="todoList">
    <div class="undone">
      <h3>These Items Are Not Completed</h3>
    </div>
    <h2>To Do List</h2>
    <div>
      <!-- <h4>Color: {{ color }}</h4> -->
      <div>
        <ul>
          <li
            v-for="task in tasks"
            :key="task.id">
            {{ task.name }}
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
        // props: [ 'color' ],
        // tasks: [],
        taskIdSort: false,
        taskNameSort: false,
        }
      },
    computed: {
      tasks() {
        console.log(4);
        var x = this.$store.getters.tasks;
        console.log(x);
        return this.$store.getters.tasks;
      }
    },
    methods: {
      ...mapActions({
        sortTaskById: 'sortTaskById',
        sortTaskByName: 'sortTaskByName'
      }),
      idSort(){
        this.sortTaskById();
        this.taskIdSort = !this.taskIdSort;
      },
      nameSort(){
        this.sortTaskByName();
        this.taskNameSort = !this.taskNameSort;
      }
    }
  }
</script>
