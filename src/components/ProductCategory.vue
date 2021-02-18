<template>
  <div class="product-category">
    <div :class="[{ open: isOpen }, 'category-header']" @click="onHeaderClick">
      <img class="arrow-img" :src="arrow" />
      <div class="category-name">{{ productCategory.groupName }}</div>
    </div>
    <div v-if="isOpen" class="category-products">
      <product-category-element
        v-for="product in productCategory.groupProducts"
        :key="'product-' + product.productId"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
  import arrowUpImage from '@/assets/arrow-up.svg';
  import arrowDownImage from '@/assets/arrow-down.svg';
  import ProductCategoryElement from '@/components/ProductCategoryElement';

  export default {
    name: 'ProductCategory',

    components: { ProductCategoryElement },

    props: ['productCategory'],

    data() {
      return {
        isOpen: true
      };
    },

    methods: {
      onHeaderClick() {
        this.isOpen = !this.isOpen;
      }
    },

    computed: {
      arrow() {
        return this.isOpen ? arrowDownImage : arrowUpImage;
      }
    }
  };
</script>

<style scoped lang="scss">
  .product-category {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: calc(50% - 20px);
    margin: 10px;
    border-radius: 8px;
    background-color: #f5f5f5;
  }

  .category-header {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 8px 8px 0 0;
  }
  .category-header:hover {
    background-color: #eeeeee;
    border-radius: 8px;
  }
  .category-header:active {
    background-color: #bdbdbd;
  }

  .open.category-header {
    border-bottom: 1px solid #000000;
  }
  .open.category-header:hover {
    border-radius: 8px 8px 0 0;
  }

  .arrow-img {
    height: 10px;
  }

  .category-name {
    padding-left: 10px;
  }
</style>
