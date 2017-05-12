<template>
  <div class="q2">
    <h2>Q2 Tasks</h2>
    <div class="">
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
        return this.$store.getters.quadrant_2;
      }
    },
    components: {
      appToDoList: ToDoList
    }
  }
</script>
