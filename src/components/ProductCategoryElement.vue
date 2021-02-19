<template>
  <div class="product-category-element">
    <div class="name">{{ product.name }}</div>
    <div class="cost">{{ costRUB }} р</div>
    <div class="buy">
      <div class="left">{{ product.left }} шт</div>
      <div
        :class="[{ 'disabled': isAddedInCart }, 'button-buy']"
        @click="addToCart"
      >
        В корзину
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ProductCategoryElement',

    props: ['product'],

    methods: {
      addToCart() {
        const product = {
          productId: this.product.productId,
          count: 1,
          isCorrectCount: true
        };
        this.$emit('add-to-cart', product);
      }
    },

    computed: {
      usdExchangeRate() {
        return this.$store.state.exchangeRates.usdToRub;
      },

      costRUB() {
        return (this.product.costUSD * this.usdExchangeRate).toFixed(2);
      },

      isAddedInCart() {
        return this.$store.getters.isInCart(this.product.productId);
      }
    }
  };
</script>

<style scoped>
  .product-category-element {
    display: flex;
    flex-direction: row;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border-top: 1px solid #000000;
  }

  .name {
    display: flex;
    align-items: center;
    width: 60%;
    padding-right: 20px;
    text-align: start;
  }

  .cost {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .buy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: auto;
  }

  .button-buy {
    display: flex;
    padding: 5px;
    background-color: red;
    color: #ffffff;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
  }
  .button-buy:hover {
    background-color: #bdbdbd;
  }
  .button-buy:active {
    background-color: #2c3e50;
  }

  .disabled {
    background-color: #bdbdbd;
    pointer-events: none;
  }
</style>
