<template>
  <div>
    <SearchBlock />
    <NewsBlock v-if="news.length !== 0" />
  </div>
</template>

<script>
  import HomeView from "./HomeView.model";

  export default HomeView;
</script>

<style lang="scss" scoped>
  @import "./HomeView.module";
</style>
