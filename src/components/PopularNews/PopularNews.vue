<template>
  <section class="popularNews">
    <h2 class="popularTitle">Популярные новости за сегодня</h2>
    <div class="popularList">
      <article
        class="popularItem"
        v-for="item in popularNews"
        :key="item.title">
        <a :href="item.url" target="_blank" class="itemLink">
          <h5 class="itemTitle">
            {{ item.title }}
          </h5>
          <p class="itemAuthor">{{ item.source.name }}</p>
        </a>
      </article>
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
