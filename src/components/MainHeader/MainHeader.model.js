import { mapGetters, mapActions } from "vuex";

import HeaderMenu from "@/components/HeaderMenu/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
  methods: {
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
  },
  mounted() {
    window.addEventListener("resize", this.handleResize);
  },
};
