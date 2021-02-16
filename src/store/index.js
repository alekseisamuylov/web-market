import Vue from "vue";
import Vuex from "vuex";
import dictionary from "./dictionary";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    dictionary,
    products
  }
});
