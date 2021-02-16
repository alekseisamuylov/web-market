export const UPDATE_PRODUCTS_FROM_FILE = "UPDATE_PRODUCTS_FROM_FILE";
export const START_AUTO_UPDATE = "START_AUTO_UPDATE";
export const STOP_AUTO_UPDATE = "STOP_AUTO_UPDATE";
export const SET_INTERVAL_ID = "SET_INTERVAL_ID";

const products = {
  state: {
    data: null,
    intervalId: null
  },

  actions: {
    [START_AUTO_UPDATE] ({commit}) {
       const intervalId = setInterval(() => {
          commit(UPDATE_PRODUCTS_FROM_FILE);
       }, 15000);
       commit(SET_INTERVAL_ID, intervalId);
    }
  },

  mutations: {
    [UPDATE_PRODUCTS_FROM_FILE] (state) {
      state.data = require("@/assets/data.json");
    },

    [SET_INTERVAL_ID] (state, intervalId) {
      state.intervalId = intervalId;
    },

    [STOP_AUTO_UPDATE] (state) {
      clearInterval(state.intervalId);
    }
  },
};

export default products;