import { mapGetters } from "vuex";

import HeaderMenu from "@/components/HeaderMenu/HeaderMenu.vue";

export default {
  components: {
    HeaderMenu,
  },
  computed: {
    ...mapGetters({
      isHeaderLight: "header/isHeaderLight",
    }),
  },
};
