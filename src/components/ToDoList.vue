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
  export default {
    data () {
      return {
        // props: [ 'color' ],
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
          my(){
            console.log(this.task.name);
          }
        }
      }
    }
  }
</script>
