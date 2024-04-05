import { mapGetters, mapActions } from "vuex";

import NewsItem from "@/components/NewsItem/NewsItem.vue";

export default {
  components: {
    NewsItem,
  },
  methods: {
    ...mapActions({
      renderNews: "news/renderNews",
    }),
  },
  computed: {
    ...mapGetters({
      news: "news/news",
      newsCounter: "news/newsCounter",
      isMoreNews: "news/isMoreNews",
    }),
  },
};
