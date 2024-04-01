import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      isHeaderLight: "header/isHeaderLight",
      isMenuOpen: "menu/isMenuOpen",
    }),
  },
};
