<template>
  <div class="showcase">
    <product-category
      v-for="productCategory in products"
      :key="'category-' + productCategory.groupId"
      :product-category="productCategory"
    />
  </div>
</template>

<script>
  import ProductCategory from '@/components/ProductCategory';

  export default {
    name: 'Showcase',

    components: {
      ProductCategory
    },

    computed: {
      products() {
        return this.$store.state.products.products;
      }
    }
  };
</script>

<style scoped>
  .showcase {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    padding: 10px;
    width: 60%;
  }
</style>
