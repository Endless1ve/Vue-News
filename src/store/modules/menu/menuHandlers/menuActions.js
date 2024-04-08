export default {
  handleResize({ state, commit }) {
    commit("updateLargeState");
    if (state.isLargeScreen) {
      commit("closeMenu");
    }
  },
};
