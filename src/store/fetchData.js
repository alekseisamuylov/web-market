import { UPDATE_EXCHANGE_RATE_RANDOM } from '@/store/exchangeRates';
import { CONVERT_PRODUCTS_DATA } from '@/store/dictionary';
import { SET_DICTIONARY } from '@/store/dictionary';

export const ON_LOAD = 'ON_LOAD';
export const GET_DICTIONARY_FROM_FILE = 'GET_DICTIONARY_FROM_FILE';
export const GET_PRODUCTS_FROM_FILE = 'GET_PRODUCTS_FROM_FILE';
export const START_AUTO_UPDATE = 'START_AUTO_UPDATE';
export const STOP_AUTO_UPDATE = 'STOP_AUTO_UPDATE';
export const SET_INTERVAL_ID = 'SET_INTERVAL_ID';

const products = {
  state: {
    intervalId: null
  },

  actions: {
    [ON_LOAD]({ dispatch }) {
      dispatch(GET_DICTIONARY_FROM_FILE);
      dispatch(GET_PRODUCTS_FROM_FILE);
    },

    [GET_DICTIONARY_FROM_FILE]({ commit }) {
      const dictionary = require('@/assets/names.json');
      commit(SET_DICTIONARY, dictionary);
    },

    [GET_PRODUCTS_FROM_FILE]({ dispatch }) {
      const productsData = require('@/assets/data.json');
      dispatch(CONVERT_PRODUCTS_DATA, productsData);
    },

    [START_AUTO_UPDATE]({ commit, dispatch }) {
      const intervalId = setInterval(() => {
        dispatch(GET_PRODUCTS_FROM_FILE);
        commit(UPDATE_EXCHANGE_RATE_RANDOM);
      }, 15000);
      commit(SET_INTERVAL_ID, intervalId);
    }
  },

  mutations: {
    [SET_INTERVAL_ID](state, intervalId) {
      state.intervalId = intervalId;
    },

    [STOP_AUTO_UPDATE](state) {
      clearInterval(state.intervalId);
    }
  }
};

export default products;
