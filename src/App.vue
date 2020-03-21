<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <!-- <pizza-component></pizza-component> -->
    <pizza-world></pizza-world>
  </div>
</template>

<script>
// import PizzaComponent from "./components/PizzaComponent.vue";
import PizzaWorld from "./components/PizzaWorld.vue";

export default {
  name: "app",
  components: {
    PizzaWorld
    // PizzaComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
