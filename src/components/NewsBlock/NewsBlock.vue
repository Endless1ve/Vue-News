<template>
  <section class="news">
    <PreloaderBlock v-if="isNewsLoading" />
    <NoFound v-if="isNoResults" />
    <div class="content" v-else-if="!isNewsLoading && news.length !== 0">
      <h2 class="title">Результаты поиска</h2>
      <NewsList />
      <div class="button" v-if="isMoreNews" @click="renderNews">
        <LoadButton>Показать еще</LoadButton>
      </div>
    </div>
  </section>
</template>

<script>
  import NewsBlock from "./NewsBlock.model";

  export default NewsBlock;
</script>

<style lang="scss" scoped>
  @import "./NewsBlock.module";
</style>
