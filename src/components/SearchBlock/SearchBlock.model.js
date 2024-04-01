export default {
  created() {
    //preloading images
    const imageUrls = ["/images/searchBg.png", "/images/searchBg-min.png"];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  },
};
