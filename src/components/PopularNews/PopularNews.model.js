import PopularList from "@/components/PopularList/PopularList.vue";
import PreloaderBlock from "@/components/UI/PreloaderBlock/PreloaderBlock.vue";

export default {
  components: { PopularList, PreloaderBlock },
  computed: {
    isPopularLoading() {
      return this.$store.state.News.isPopularLoading;
    },
  },
};
