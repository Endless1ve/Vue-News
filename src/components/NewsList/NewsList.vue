<template>
  <div class="newsList">
    <NewsItem v-for="num of newsCounter" :key="num" :item="news[num - 1]" />
  </div>
</template>

<script>
  import NewsList from "./NewsList.model";

  export default NewsList;
</script>

<style lang="scss" scoped>
  @import "./NewsList.module";
</style>
