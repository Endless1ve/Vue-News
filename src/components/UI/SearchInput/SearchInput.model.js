import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations({
      updateSearchQuery: "news/updateSearchQuery",
    }),
  },
  computed: {
    query: {
      get() {
        return this.$store.state.news.searchQuery;
      },
      set(value) {
        this.updateSearchQuery(value);
      },
    },
  },
};
