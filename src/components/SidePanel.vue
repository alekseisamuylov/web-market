<template>
  <div class="side-panel">
    <settings />
    <cart />
  </div>
</template>

<script>
  import Cart from '@/components/Cart';
  import Settings from '@/components/Settings';

  export default {
    name: 'SidePanel',

    components: {
      Settings,
      Cart
    }
  };
</script>

<style scoped>
  .side-panel {
    display: flex;
    flex-direction: column;
    width: 30%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
