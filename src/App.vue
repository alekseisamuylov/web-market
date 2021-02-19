<template>
  <div id="app">
    <page-header />
    <div class="main">
      <showcase />
      <side-panel />
    </div>
  </div>
</template>

<script>
  import Showcase from '@/components/Showcase';
  import SidePanel from '@/components/SidePanel';
  import PageHeader from '@/components/PageHeader';
  import { ON_LOAD, START_AUTO_UPDATE } from '@/store/fetchData';

  export default {
    name: 'App',
    created() {
      this.$store.dispatch(ON_LOAD);
      this.$store.dispatch(START_AUTO_UPDATE);
    },

    components: {
      PageHeader,
      Showcase,
      SidePanel
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
  }
</style>

<style scoped>
  .main {
    display: flex;
    align-items: flex-start;
    justify-content: center;
  }
</style>
