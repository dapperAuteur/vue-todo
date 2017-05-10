<template>
  <div class="editToDoItem">
    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <input
          v-model="task.name"
          class="form-control"
          />
        <select
          id="priority"
          class="form-control"
          v-model="selectedPriority"
          >
          <option
            v-for="priority in priorityQuadrant"
            >
          </option>
        </select>
        <input
          v-model="task.dateDue"
          class="form-control"
          />
        <input
          v-model="task.recurring"
          class="form-control"
          />
        <input
          v-model="task.notes"
          class="form-control"
          />
        <button
          class="btn btn-success"
          @click="updateTask">
          Update Task
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['task'],
    data () {
      return {
        // task: {
        //   id: null,
        //   name: 'enter task name',
        //   priorityQuadrant: [1, 2, 3, 4],
        //   dateAdded: null,
        //   dateDue: null,
        //   completed: false,
        //   recurring: false,
        //   notes: ''
        // },
        priorityQuadrant: [1, 2, 3, 4],
        selectedPriority: 4
      }
    },
    methods: {
      updateTask() {
        this.task.priorityQuadrant = this.selectedPriority;
        const order = {
          taskId: this.task.id,
          taskName: this.task.name,
          taskPriorityQuadrant: this.task.priorityQuadrant,
          taskDateAdded: this.task.dateAdded,
          taskDateDue: this.task.dateDue,
          taskCompleted: this.task.completed,
          taskRecurring: this.task.recurring,
          taskNotes: this.task.notes,
        }
        console.log(order);
        console.log(this.task);
        this.$store.dispatch('updateTask', order);
      }
    }
  }
</script>
