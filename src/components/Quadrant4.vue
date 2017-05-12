<template>
  <div class="q4">
    <h2>Q4 Tasks</h2>
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
      q4() {
        console.log(this.$store.getters.quadrant_4)
        return this.$store.getters.quadrant_4;
      }
    },
    components: {
      appToDoList: ToDoList
    }
  }
</script>
