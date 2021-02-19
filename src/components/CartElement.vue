<template>
  <div class="cart-element">
    <div class="name">{{ product.name }}</div>
    <div class="count">
      <input
        class="count-input"
        v-model="productCount"
        type="number"
        @change="onCountChange"
      />
      <div class="count-text">шт.</div>
    </div>
    <div class="price">
      {{ costRUB + ' руб.' }}
      <span :class="{ wrong: !isCorrectCount }">{{
        ' x' + productCount
      }}</span>
    </div>
    <div class="button-delete" @click="onDelete">Удалить</div>
  </div>
</template>

<script>
  export default {
    name: 'CartElement',

    props: ['product', 'isCorrectCount'],

    data() {
      return {
        productCount: null
      };
    },

    created() {
      this.productCount = this.product.count;
    },

    methods: {
      onDelete() {
        this.$emit('delete-from-cart', this.product.productId);
      },

      onCountChange() {
        const newCount = {
          productId: this.product.productId,
          count: this.productCount,
          isCorrectCount:
            this.productCount > 0 && this.productCount <= this.product.left
        };
        this.$store.commit('CHANGE_PRODUCT_COUNT', newCount);
      }
    },

    computed: {
      usdExchangeRate() {
        return this.$store.state.exchangeRates.usdToRub;
      },

      costRUB() {
        return (this.product.costUSD * this.usdExchangeRate).toFixed(2);
      },
    }
  };
</script>

<style scoped>
  .cart-element {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px 0;
    border-top: 1px solid #8d8d8d;
    box-sizing: border-box;
    text-align: start;
  }

  .name {
    display: flex;
    align-items: center;
    width: 85%;
  }

  .count {
    display: flex;
    align-items: center;
    flex-direction: row;
    width: 15%;
    padding: 10px;
    box-sizing: border-box;
  }

  .count-input {
    width: 30px;
  }

  .count-text {
    padding-left: 4px;
    font-size: 10px;
    color: gray;
  }

  .button-delete {
    margin-left: auto;
    padding: 5px;
    border-radius: 5px;
    font-size: 14px;
    font-weight: bold;
    cursor: pointer;
    background-color: red;
    color: #ffffff;
  }

  .button-delete:hover {
    background-color: #bdbdbd;
  }
  .button-delete:active {
    background-color: #2c3e50;
  }

  .wrong {
    color: red;
    font-weight: bold;
  }
</style>
