import { mapActions, mapGetters } from "vuex";

import NewsList from "@/components/NewsList/NewsList.vue";
import LoadButton from "@/components/UI/LoadButton/LoadButton.vue";
import PreloaderBlock from "@/components/UI/PreloaderBlock/PreloaderBlock.vue";

export default {
  components: {
    NewsList,
    LoadButton,
    PreloaderBlock,
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
      news: "news/news",
    }),
  },
};
