<template>
  <div id="app">
    <div class="main">
      <showcase />
    </div>
  </div>
</template>

<script>
  import Showcase from '@/components/Showcase';
  import { ON_LOAD, START_AUTO_UPDATE } from '@/store/fetchData';

  export default {
    name: 'App',
    created() {
      this.$store.dispatch(ON_LOAD);
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
