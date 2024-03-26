import MainHeader from "@/components/MainHeader/MainHeader.vue";
import { mapActions } from "vuex";

export default {
  components: { MainHeader },
  methods: {
    ...mapActions({
      setHeaderDark: "Header/setHeaderDark",
    }),
  },
  created() {
    this.setHeaderDark();
  },
};
