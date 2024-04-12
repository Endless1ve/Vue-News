import { mapActions } from "vuex";

import SearchBlock from "@/components/SearchBlock/SearchBlock.vue";
import PopularNews from "@/components/PopularNews/PopularNews.vue";

export default {
  components: {
    SearchBlock,
    PopularNews,
  },
  methods: {
    ...mapActions({
      getDate: "date/getDate",
      fetchPopularNews: "popularNews/fetchPopularNews",
    }),
  },
  created() {
    this.getDate();
    this.fetchPopularNews();
  },
};
