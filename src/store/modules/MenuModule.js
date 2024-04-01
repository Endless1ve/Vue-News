const MenuModule = {
  state: () => ({
    isMenuOpen: false,
    isLargeScreen: window.innerWidth > 650,
  }),
  getters: {
    isMenuOpen(state) {
      return state.isMenuOpen;
    },
    isLargeScreen(state) {
      return state.isLargeScreen;
    },
  },
  mutations: {
    updateLargeState(state) {
      state.isLargeScreen = window.innerWidth > 650;
    },
    toggleMenu(state) {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu(state) {
      state.isMenuOpen = false;
    },
  },
  actions: {
    handleResize({ state, commit }) {
      commit("updateLargeState");
      if (state.isLargeScreen) {
        commit("closeMenu");
      }
    },
  },
  namespaced: true,
};

export default MenuModule;
