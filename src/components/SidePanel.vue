<template>
  <div class="side-panel">
    <cart />
  </div>
</template>

<script>
  import Cart from '@/components/Cart';
  export default {
    name: 'SidePanel',

    components: {
      Cart
    }
  };
</script>

<style scoped>
  .side-panel {
    width: 30%;
    padding: 10px;
    box-sizing: border-box;
  }
</style>
