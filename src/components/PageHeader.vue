<template>
  <div class="page-header">
    <div class="logo">
      <span class="project-name">Web market</span>
      <span class="underproject-text">SOFTCORP test project</span>
    </div>
    <div class="exchange-rate">
      1 USD =
      <img class="arrow-img" :src="arrow" />
      {{ usdExchangeRate + ' РУБ' }}
    </div>
  </div>
</template>

<script>
  import arrowGood from '@/assets/arrow-good.svg';
  import arrowBad from '@/assets/arrow-bad.svg';
  export default {
    name: 'PageHeader',

    computed: {
      usdExchangeRate() {
        return this.$store.state.exchangeRates.usdToRub;
      },

      isBetterExchangeRate() {
        return this.$store.state.exchangeRates.isBetter;
      },

      arrow() {
        return this.isBetterExchangeRate ? arrowGood : arrowBad;
      }
    }
  };
</script>

<style scoped>
  .page-header {
    display: flex;
    align-items: center;
    height: 60px;
    padding: 10px;
    background-color: #f5f5f5;
  }

  .logo {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
  }

  .exchange-rate {
    margin-left: auto;
  }

  .project-name {
    font-size: 30px;
  }

  .underproject-text {
    font-size: 10px;
  }

    .arrow-img {
        height: 10px;
    }
</style>
