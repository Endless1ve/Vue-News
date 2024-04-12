import { mapGetters } from "vuex";

import PopularItem from "@/components/PopularItem/PopularItem.vue";

export default {
  components: { PopularItem },
  computed: {
    ...mapGetters({
      popularNews: "popularNews/popularNews",
    }),
  },
};
