<template>
  <section class="popularNews">
    <h2 class="popularTitle">Популярные новости за сегодня</h2>
    <PopularList />
  </section>
</template>

<script>
  import PopularNews from "./PopularNews.model";

  export default PopularNews;
</script>

<style lang="scss" scoped>
  @import "./PopularNews.module";
</style>
