import { mapActions, mapGetters } from "vuex";

import SearchInput from "@/components/UI/SearchInput/SearchInput.vue";
import ButtonItem from "@/components/UI/ButtonItem/ButtonItem.vue";
import ErrorItem from "@/components/UI/ErrorItem/ErrorItem.vue";

export default {
  components: {
    SearchInput,
    ButtonItem,
    ErrorItem,
  },
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
      validateSearchInput: "news/validateSearchInput",
    }),
  },
  computed: {
    ...mapGetters({
      searchQuery: "news/searchQuery",
      errorText: "news/errorText",
      isInputValid: "news/isInputValid",
      isSearchError: "news/isSearchError",
    }),
  },
};
