<template>
  <div class="home">
    <app-create-to-do-item></app-create-to-do-item>
    <app-to-do-list></app-to-do-list>

  </div>
</template>

<script>
  import CreateToDoItem from './CreateToDoItem.vue';
  import ToDoList from './ToDoList.vue';
  export default {
    name: 'home',
    data () {
      return {

      }
    },
    components: {
      appCreateToDoItem: CreateToDoItem,
      appToDoList: ToDoList
    },
    methods: {

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
