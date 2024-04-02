<template>
  <section class="popularNews">
    <PreloaderBlock v-if="isPopularLoading" />
    <div class="content" v-else>
      <h2 class="popularTitle">Популярные новости за сегодня</h2>
      <PopularList />
    </div>
  </section>
</template>

<script>
  import PopularNews from "./PopularNews.model";

  export default PopularNews;
</script>

<style lang="scss" scoped>
  @import "./PopularNews.module";
</style>
