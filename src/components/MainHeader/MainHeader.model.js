import { mapGetters, mapActions, mapMutations } from "vuex";

import HeaderMenu from "@/components/HeaderMenu/HeaderMenu.vue";
import BurgerButton from "@/components/UI/BurgerButton/BurgerButton.vue";

export default {
  components: {
    HeaderMenu,
    BurgerButton,
  },
  methods: {
    ...mapMutations({
      toggleMenu: "menu/toggleMenu",
    }),
    ...mapActions({
      handleResize: "menu/handleResize",
    }),
  },
  computed: {
    ...mapGetters({
      isHeaderLight: "header/isHeaderLight",
      isMenuOpen: "menu/isMenuOpen",
      isLargeScreen: "menu/isLargeScreen",
    }),
    themeClass() {
      return {
        "header-light": this.isHeaderLight,
        "header-dark": this.isMenuOpen,
      };
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
