<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h2>To Do List</h2>
    <div>
      <input
        v-model="task.name"
        class="form-control"
      />
      <button
        class="btn btn-primary"
        @click="">
        Add Task
      </button>
    </div>
    <div>
      <h2>List of Tasks</h2>
      <h3>{{ task.name }}</h3>
      <ul>
        <li
          v-for="task in tasks"
          :key="task.id">
          {{ task.name }}
        </li>
      </ul>
    </div>

    <h2>Completed Tasks</h2>

  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Are you ready to get to work?',
      task: {
        id: null,
        name: '',
        priorityQuadrant: null,
        dateAdded: null,
        dateDue: null,
        completed: false,
        recurring: false,
        notes: ''
      },
      tasks: [
        {
          id: 1,
          name: '15 min of Khan Academy',
          priorityQuadrant: 4,
          dateAdded: null,
          dateDue: null,
          completed: false,
          recurring: true,
          notes: 'got 100%'
        },
        {
          id: 2,
          name: 'Go for a jog twice a day',
          priorityQuadrant: 1,
          dateAdded: null,
          dateDue: null,
          completed: false,
          recurring: true,
          notes: 'felt great afterwards'
        }
      ],
      methods: {
        addTask() {
          console.log(this.task.name);
        }
      }
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
