<template>
  <div class="q3">
    <h2>Q3 Tasks</h2>
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
        return this.$store.getters.quadrant_3;
      }
    },
    components: {
      appToDoList: ToDoList
    }
  }
</script>
