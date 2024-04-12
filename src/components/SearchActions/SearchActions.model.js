import { mapActions, mapGetters } from "vuex";

import InputItem from "@/components/UI/InputItem/InputItem.vue";
import ButtonItem from "@/components/UI/ButtonItem/ButtonItem.vue";
import ErrorItem from "@/components/UI/ErrorItem/ErrorItem.vue";

export default {
  components: {
    InputItem,
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
