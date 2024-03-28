import SearchBlock from "@/components/SearchBlock/SearchBlock.vue";
import PopularNews from "@/components/PopularNews/PopularNews.vue";

import { mapActions } from "vuex";

export default {
  components: { SearchBlock, PopularNews },
  methods: {
    ...mapActions({
      getDate: "Date/getDate",
      fetchPopularNews: "News/fetchPopularNews",
    }),
  },
  created() {
    this.getDate();
  },
  mounted() {
    this.fetchPopularNews();
  },
};
