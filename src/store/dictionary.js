export const UPDATE_DICTIONARY_FROM_FILE = "UPDATE_DICTIONARY_FROM_FILE";

const dictionary = {
  state: {
    names: null,
  },
  actions: {
  },
  mutations: {
    [UPDATE_DICTIONARY_FROM_FILE] (state) {
      state.names = require("@/assets/names.json");
    }
  },
};

export default dictionary;