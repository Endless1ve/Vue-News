import { mapActions } from "vuex";

import SearchBlock from "@/components/SearchBlock/SearchBlock.vue";

export default {
  components: {
    SearchBlock,
  },
  methods: {
    ...mapActions({
      fetchPopularNews: "news/fetchPopularNews",
    }),
  },
  created() {
    this.fetchPopularNews();
  },
};
