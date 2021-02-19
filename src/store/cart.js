export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_PRODUCT_COUNT = 'CHANGE_PRODUCT_COUNT';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const products = {
  state: {
    cart: []
  },

  mutations: {
    [ADD_TO_CART](state, product) {
        state.cart.push(product);
    },

    [CHANGE_PRODUCT_COUNT](state, productCount) {
      const product = state.cart.find(e => e.productId === productCount.productId);
      product.count = productCount.count;
      product.isCorrectCount = productCount.isCorrectCount;
    },

    [REMOVE_FROM_CART](state, productId) {
      const productIndex = state.cart.findIndex(e => e.productId === productId);
      state.cart.splice(productIndex, 1);
    }
  },

  getters: {
    isInCart: state => productId => {
      const productIndex = state.cart.findIndex(e => e.productId === productId);

      return productIndex !== -1;
    }
  }
};

export default products;
