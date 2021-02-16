export const UPDATE_EXCHANGE_RATE_RANDOM = "UPDATE_EXCHANGE_RATE_RANDOM";
const usdMin = 20;
const usdMax = 80;

const exchangeRates = {
  state: {
    usdToRub: usdMax,
    previousRate: usdMin,
    isBetter: false
  },

  mutations: {
    [UPDATE_EXCHANGE_RATE_RANDOM] (state) {
      const newRate = Math.floor(Math.random() * (usdMax - usdMin)) + usdMin;

      state.previousRate = state.usdToRub;
      state.usdToRub = newRate;
      state.isBetter = state.previousRate > state.usdToRub;
    }
  },
};

export default exchangeRates;