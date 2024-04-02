import SearchActions from "@/components/SearchActions/SearchActions.vue";

export default {
  components: {
    SearchActions,
  },
  created() {
    const imageUrls = ["/images/searchBg.png", "/images/searchBg-min.png"];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  },
};
