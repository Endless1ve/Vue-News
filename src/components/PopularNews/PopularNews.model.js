export default {
  computed: {
    popularNews() {
      return this.$store.state.News.popularNews;
    },
  },
};
