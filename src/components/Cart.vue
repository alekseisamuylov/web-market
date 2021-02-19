<template>
  <div class="cart">
    <div class="header">Корзина</div>
    <cart-element
      v-for="product in products"
      :key="'cart-' + product.productId"
      :product="product"
      :is-correct-count="product.isCorrectCount"
      @delete-from-cart="deleteFromCart"
    ></cart-element>
    <div class="total">{{ 'Общая стоимость: ' + totalPriceRUB + ' руб.' }}</div>
  </div>
</template>

<script>
  import CartElement from '@/components/CartElement';

  export default {
    name: 'Cart',

    methods: {
      deleteFromCart(productId) {
        this.$store.commit('REMOVE_FROM_CART', productId);
      }
    },

    computed: {
      cart() {
        return this.$store.state.cart.cart;
      },

      products() {
        return this.$store.getters.getProducts(this.cart);
      },

      totalPrice() {
        let totalPrice = 0;
        this.products.forEach(e => {
          if (e.isCorrectCount) {
            totalPrice += e.costUSD * e.count;
          }
        });

        return totalPrice;
      },

      usdExchangeRate() {
        return this.$store.state.exchangeRates.usdToRub;
      },

      totalPriceRUB() {
        return (this.usdExchangeRate * this.totalPrice).toFixed(2);
      },
    },

    components: {
      CartElement
    }
  };
</script>

<style scoped>
  .cart {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: calc(100% - 20px);
    box-sizing: border-box;
    background-color: #f5f5f5;
    padding: 10px;
    margin: 10px;
    border-radius: 8px;
  }

  .header {
    padding-bottom: 10px;
    box-sizing: border-box;
  }

  .total {
    margin-left: auto;
  }
</style>
