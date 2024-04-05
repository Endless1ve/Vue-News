import { mapActions, mapGetters } from "vuex";

import SearchBlock from "@/components/SearchBlock/SearchBlock.vue";
import NewsBlock from "@/components/NewsBlock/NewsBlock.vue";

export default {
  components: {
    SearchBlock,
    NewsBlock,
  },
  methods: {
    ...mapActions({
      fetchPopularNews: "news/fetchPopularNews",
      getDate: "date/getDate",
    }),
  },
  computed: {
    ...mapGetters({
      news: "news/news",
    }),
  },

  created() {
    this.getDate();
    this.fetchPopularNews();
  },
};
