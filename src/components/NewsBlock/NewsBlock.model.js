import { mapActions, mapGetters } from "vuex";

import NewsList from "@/components/NewsList/NewsList.vue";
import LoadButton from "@/components/UI/LoadButton/LoadButton.vue";
import PreloaderBlock from "@/components/UI/PreloaderBlock/PreloaderBlock.vue";
import NoFound from "@/components/UI/NoFound/NoFound.vue";

export default {
  components: {
    NewsList,
    LoadButton,
    PreloaderBlock,
    NoFound,
  },
  methods: {
    ...mapActions({
      renderNews: "news/renderNews",
    }),
  },
  computed: {
    ...mapGetters({
      isMoreNews: "news/isMoreNews",
      isNewsLoading: "news/isNewsLoading",
      isNoResults: "news/isNoResults",
      news: "news/news",
    }),
  },
};
