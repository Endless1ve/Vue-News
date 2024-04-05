import { mapActions, mapGetters } from "vuex";

import NewsList from "@/components/NewsList/NewsList.vue";
import LoadButton from "@/components/UI/LoadButton/LoadButton.vue";

export default {
  components: {
    NewsList,
    LoadButton,
  },
  methods: {
    ...mapActions({
      renderNews: "news/renderNews",
    }),
  },
  computed: {
    ...mapGetters({
      isMoreNews: "news/isMoreNews",
    }),
  },
};
