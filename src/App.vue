<template>
  <div id="app">
    <h1>Reversi</h1>
    <board />
  </div>
</template>

<script>
import Board from './components/Board.vue';

export default {
  name: 'app',
  components: {
    Board,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h1 {
  text-align: center;
}
</style>
