import { SET_PRODUCTS } from '@/store/products';

export const CONVERT_PRODUCTS_DATA = 'CONVERT_PRODUCTS_DATA';
export const SET_DICTIONARY = 'SET_DICTIONARY';

const dictionary = {
  state: {
    dictionary: null
  },

  actions: {
    [CONVERT_PRODUCTS_DATA]({ state, commit }, productsData) {
      const goods = productsData.Value.Goods;

      const groupIDs = [];
      const groups = [];

      goods.forEach(element => {
        const elementGroupId = element.G;

        if (!groupIDs.includes(elementGroupId)) {
          groupIDs.push(elementGroupId);

          const group = {
            groupName: state.dictionary[elementGroupId].G,
            groupId: elementGroupId,
            groupProducts: []
          };

          const groupData = goods.filter(
            element => element.G === elementGroupId
          );
          groupData.forEach(element => {
            group.groupProducts.push({
              costUSD: element.C,
              productId: element.T,
              left: element.P,
              name: state.dictionary[elementGroupId].B[element.T].N
            });
          });

          groups.push(group);
        }
      });

      commit(SET_PRODUCTS, groups);
    }
  },
  mutations: {
    [SET_DICTIONARY](state, dictionary) {
      state.dictionary = dictionary;
    }
  }
};

export default dictionary;
