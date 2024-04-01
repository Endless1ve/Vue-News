import { mapGetters } from "vuex";
import NavigationLinks from "@/components/NavigationLinks/NavigationLinks.vue";
import MenuIcons from "@/components/MenuIcons/MenuIcons.vue";

export default {
  components: {
    NavigationLinks,
    MenuIcons,
  },
  computed: {
    ...mapGetters({
      isHeaderLight: "Header/isHeaderLight",
      isMenuOpen: "Menu/isMenuOpen",
    }),
  },
};
