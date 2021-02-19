export const SET_PRODUCTS = 'SET_PRODUCTS';

const products = {
  state: {
    products: null
  },

  mutations: {
    [SET_PRODUCTS](state, products) {
      state.products = products;
    }
  },

  getters: {
    getProducts: state => cart => {
      const productsInCart = [];
      cart.forEach(productInfo => {
        const categoryProducts = state.products.find(category => category.groupId === productInfo.categoryId);
        const product = categoryProducts.groupProducts.find(product => product.productId === productInfo.productId);
        product.count = productInfo.count;
        product.isCorrectCount = productInfo.isCorrectCount;
        productsInCart.push(product);
      });

      return productsInCart;
    }
  }
};

export default products;
