<template>
  <div id="app">
    <app-header></app-header>
    <img src="./assets/quadrants.gif" width=300px>
    <router-view></router-view>
  </div>
</template>

<script>
  import Header from './components/Header';
  export default {
    name: 'app',
    created() {
      this.$store.dispatch('initTasks');
    },
    components: {
        appHeader: Header
      },
  }
  </script>

  <style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
