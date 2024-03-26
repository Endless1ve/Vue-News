import { mapMutations, mapActions } from "vuex";

import InputItem from "@/components/UI/InputItem/InputItem.vue";
import ButtonItem from "@/components/UI/ButtonItem/ButtonItem.vue";

export default {
  components: {
    InputItem,
    ButtonItem,
  },
  computed: {
    searchQuery() {
      return this.$store.state.News.searchQuery;
    },
    totalPages() {
      return this.$store.state.News.totalPages;
    },
    page() {
      return this.$store.state.News.page;
    },
  },
  methods: {
    ...mapMutations({
      updateStoreQuery: "News/updateSearchQuery",
    }),
    ...mapActions({
      fetchNews: "News/fetchNews",
      fetchMoreNews: "News/fetchMoreNews",
    }),
    updateSearchQuery(e) {
      this.updateStoreQuery(e.target.value);
    },
  },
};
