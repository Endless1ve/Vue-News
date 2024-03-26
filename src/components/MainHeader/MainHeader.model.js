import { mapActions, mapMutations } from "vuex";

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
    isMenuOpen() {
      return this.$store.state.Menu.isMenuOpen;
    },
    isHeaderLight() {
      return this.$store.state.Header.isHeaderLight;
    },
    isLargeScreen() {
      return this.$store.state.Menu.isLargeScreen;
    },
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
