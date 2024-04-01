import { mapActions, mapMutations, mapGetters } from "vuex";

import HeaderMenu from "@/components/HeaderMenu/HeaderMenu.vue";
import BurgerButton from "@/components/UI/BurgerButton/BurgerButton.vue";

mapActions;
export default {
  components: {
    HeaderMenu,
    BurgerButton,
  },
  methods: {
    ...mapMutations({
      toggleMenu: "Menu/toggleMenu",
    }),
    ...mapActions({
      handleResize: "Menu/handleResize",
    }),
  },
  computed: {
    ...mapGetters({
      isHeaderLight: "Header/isHeaderLight",
      isMenuOpen: "Menu/isMenuOpen",
      isLargeScreen: "Menu/isLargeScreen",
    }),
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
