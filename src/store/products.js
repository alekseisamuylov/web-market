export const UPDATE_PRODUCTS_FROM_FILE = 'UPDATE_PRODUCTS_FROM_FILE';
export const START_AUTO_UPDATE = 'START_AUTO_UPDATE';
export const STOP_AUTO_UPDATE = 'STOP_AUTO_UPDATE';
export const SET_INTERVAL_ID = 'SET_INTERVAL_ID';
export const SET_PRODUCTS = 'SET_PRODUCTS';

const products = {
  state: {
    products: null
  },

  mutations: {
    [SET_PRODUCTS](state, products) {
      console.log(products);
      state.products = products;
    }
  }
};

export default products;
