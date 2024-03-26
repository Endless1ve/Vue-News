export default {
  computed: {
    isHeaderLight() {
      return this.$store.state.Header.isHeaderLight;
    },
    isMenuOpen() {
      return this.$store.state.Menu.isMenuOpen;
    },
  },
};
