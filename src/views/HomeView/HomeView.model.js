import MainHeader from "@/components/MainHeader/MainHeader.vue";
import { mapActions } from "vuex";

export default {
  components: {
    MainHeader,
  },
  methods: {
    ...mapActions({
      setHeaderLight: "Header/setHeaderLight",
    }),
  },
  created() {
    this.setHeaderLight();
  },
};
