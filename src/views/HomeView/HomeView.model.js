import SearchBlock from "@/components/SearchBlock/SearchBlock.vue";
import { mapActions } from "vuex";

export default {
  components: { SearchBlock },
  methods: {
    ...mapActions({
      getDate: "Date/getDate",
    }),
  },
  created() {
    this.getDate();
  },
};
