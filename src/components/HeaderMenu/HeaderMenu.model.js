import NavigationLinks from "@/components/NavigationLinks/NavigationLinks.vue";
import MenuIcons from "@/components/MenuIcons/MenuIcons.vue";

export default {
  components: {
    NavigationLinks,
    MenuIcons,
  },
  computed: {
    isHeaderLight() {
      return this.$store.state.Header.isHeaderLight;
    },
    isMenuOpen() {
      return this.$store.state.Menu.isMenuOpen;
    },
  },
};
