import { mapActions, mapGetters } from "vuex";

import InputItem from "@/components/UI/InputItem/InputItem.vue";
import ButtonItem from "@/components/UI/ButtonItem/ButtonItem.vue";

export default {
  components: {
    InputItem,
    ButtonItem,
  },
  methods: {
    ...mapActions({
      fetchNews: "news/fetchNews",
    }),
  },
  computed: {
    ...mapGetters({
      searchQuery: "news/searchQuery",
    }),
  },
};
