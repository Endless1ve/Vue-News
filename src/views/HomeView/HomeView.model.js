import { mapActions } from "vuex";

import MainHeader from "@/components/MainHeader/MainHeader.vue";

export default {
  components: {
    MainHeader,
  },
  methods: {
    ...mapActions({
      setHeaderLight: "header/setHeaderLight",
    }),
  },
  created() {
    this.setHeaderLight();
  },
};
