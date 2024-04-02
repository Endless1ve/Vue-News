import { mapGetters } from "vuex";

import PopularList from "@/components/PopularList/PopularList.vue";
import PreloaderBlock from "@/components/UI/PreloaderBlock/PreloaderBlock.vue";

export default {
  components: {
    PopularList,
    PreloaderBlock,
  },
  computed: {
    ...mapGetters({
      isPopularLoading: "news/isPopularLoading",
    }),
  },
};
