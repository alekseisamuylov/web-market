<template>
  <div id="app">
    <div class="main">
      <showcase />
    </div>
  </div>
</template>

<script>
  import Showcase from '@/components/Showcase';
  import { UPDATE_DICTIONARY_FROM_FILE } from '@/store/dictionary.js';
  import {
    UPDATE_PRODUCTS_FROM_FILE,
    START_AUTO_UPDATE
  } from '@/store/products.js';

  export default {
    name: 'App',
    created() {
      this.$store.commit(UPDATE_DICTIONARY_FROM_FILE);
      this.$store.commit(UPDATE_PRODUCTS_FROM_FILE);
      this.$store.dispatch(START_AUTO_UPDATE);
    },

    components: {
      Showcase
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

<style scoped>
  .main {
    display: flex;
    justify-content: center;
  }
</style>
