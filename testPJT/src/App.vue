<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import { Slide } from 'vue-burger-menu' // npm install vue-burger-menu --save

export default {
  name: 'App',
  components: {
    // Slide
  }
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
