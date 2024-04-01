const HeaderModule = {
  state: () => ({
    isHeaderLight: false,
  }),
  getters: {
    isHeaderLight(state) {
      return state.isHeaderLight;
    },
  },
  mutations: {
    setLight(state) {
      state.isHeaderLight = true;
    },
    setDark(state) {
      state.isHeaderLight = false;
    },
  },
  actions: {
    setHeaderLight({ commit }) {
      commit("setLight");
    },
    setHeaderDark({ commit }) {
      commit("setDark");
    },
  },
  namespaced: true,
};

export default HeaderModule;
