import PopularItem from "@/components/PopularItem/PopularItem.vue";

export default {
  components: { PopularItem },
  computed: {
    popularNews() {
      return this.$store.state.News.popularNews;
    },
  },
};
