<template>
  <div id="app">
    <img
      alt="Vue logo"
      src="./assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import UPDATE_DICTIONARY_FROM_FILE from "@/store/dictionary.js";
import { UPDATE_PRODUCTS_FROM_FILE, START_AUTO_UPDATE } from "@/store/products.js";

export default {
  name: "App",
  created() {
    this.$store.commit(UPDATE_DICTIONARY_FROM_FILE);
    this.$store.commit(UPDATE_PRODUCTS_FROM_FILE);
    this.$store.dispatch(START_AUTO_UPDATE);
  },

  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
