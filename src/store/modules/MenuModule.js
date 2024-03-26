const MenuModule = {
  state: () => ({
    isMenuOpen: false,
    isLargeScreen: window.innerWidth > 630,
  }),
  mutations: {
    updateLargeState(state) {
      state.isLargeScreen = window.innerWidth > 630;
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
