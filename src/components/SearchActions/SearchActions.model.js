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
  },
  methods: {
    ...mapMutations({
      updateStoreQuery: "News/updateSearchQuery",
    }),
    ...mapActions({
      fetchNews: "News/fetchNews",
    }),
    updateSearchQuery(e) {
      this.updateStoreQuery(e.target.value);
    },
  },
};
