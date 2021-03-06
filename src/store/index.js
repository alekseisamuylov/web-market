import Vue from "vue";
import Vuex from "vuex";
import dictionary from "./dictionary";
import products from "./products";
import exchangeRates from "./exchangeRates";
import fetchData from "./fetchData"
import cart from  "./cart"

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dictionary,
    products,
    exchangeRates,
    fetchData,
    cart
  }
});
