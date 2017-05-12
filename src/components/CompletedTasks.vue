<template>
  <div class="completedTask">
    <h2>Completed Tasks</h2>
    <div class="done">
      <h3>These Items Are Completed</h3>
      <app-to-do-list></app-to-do-list>
    </div>
  </div>
</template>

<script>
  import ToDoList from './ToDoList.vue';
  export default {
    data () {
      return {

      }
    },
    computed: {
      tasks() {
        return this.$store.getters.tasks;
      }
    },
    components: {
      appToDoList: ToDoList
    }
  }
</script>
