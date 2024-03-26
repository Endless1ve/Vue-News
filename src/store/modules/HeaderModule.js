const HeaderModule = {
  state: () => ({
    isHeaderLight: false,
  }),
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
