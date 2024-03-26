<template>
  <section class="search">
    <div class="searchContent">
      <div class="searchTexts">
        <h1 class="title">Что в мире творится?</h1>
        <p class="description">
          Введите в поиске любую тему и узнайте, насколько популярной она была в
          новостях за прошедшую неделю.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
  import SearchBlock from "./SearchBlock.model";

  export default SearchBlock;
</script>

<style lang="scss" scoped>
  @import "./SearchBlock.module";
</style>
