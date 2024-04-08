export default {
  updateLargeState(state) {
    state.isLargeScreen = window.innerWidth > 650;
  },
  toggleMenu(state) {
    state.isMenuOpen = !state.isMenuOpen;
  },
  closeMenu(state) {
    state.isMenuOpen = false;
  },
};
