<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <app-to-do-list></app-to-do-list>

  </div>
</template>

<script>
  import ToDoList from './ToDoList.vue';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Are you ready to get to work?',
      }
    },
    components: {
      appToDoList: ToDoList
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
