<template>
  <article class="item" v-if="item">
    <a class="itemLink" :href="item.url">
      <img class="itemImage" :src="item.urlToImage" :alt="item.title" />
      <div class="itemTexts">
        <div class="textsContent">
          <p class="itemDate">{{ item.publishedAt }}</p>
          <h4 class="itemTitle">{{ item.title }}</h4>
          <p class="itemDescription">{{ item.description }}</p>
        </div>
        <p class="itemAuthor">{{ item.source.name }}</p>
      </div>
    </a>
  </article>
</template>

<script>
  import NewsItem from "./NewsItem.model";

  export default NewsItem;
</script>

<style lang="scss" scoped>
  @import "./NewsItem.module";
</style>
