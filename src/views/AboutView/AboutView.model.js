import { mapActions } from "vuex";

import MainHeader from "@/components/MainHeader/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
  methods: {
    ...mapActions({
      setHeaderDark: "header/setHeaderDark",
    }),
  },
  created() {
    this.setHeaderDark();
  },
};
