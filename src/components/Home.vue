<template>
  <div class="home">
    <input
      v-model="msg"
      class="form-control"
      v-on:keyup="msgLength"
    />
    <h3>Message Length: {{ msgLen }}</h3>
    <app-to-do-item :msg="msg"></app-to-do-item>
    <app-to-do-list></app-to-do-list>

  </div>
</template>

<script>
  import ToDoItem from './ToDoItem.vue';
  import ToDoList from './ToDoList.vue';
  export default {
    name: 'home',
    data () {
      return {
        msg: 'Are you ready to get to work?',
        msgLen: null
      }
    },
    components: {
      appToDoItem: ToDoItem,
      appToDoList: ToDoList
    },
    methods: {
      msgLength() {
        console.log(this.msg.length);
        this.msgLen = this.msg.length;
      }
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
