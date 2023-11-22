<template>
  <div class="container">
    <h1 class="title">Check the Weather</h1>
    <weatherCard/>
  </div>
</template>

<script>
import weatherCard from './components/Card.vue';

export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {
    weatherCard
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  height: 80vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/world.jpg");
  background-size: cover;
}

.container {
  margin: 0 auto;
  background-color: #94f992;
  width: 400px;
  padding: 15px;
  border-radius: 30px;
}

.title {
  display: flex;
  justify-content: center;
  align-items: center;
  color: #004d70;
}
</style>
