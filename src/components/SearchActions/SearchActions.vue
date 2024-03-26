<template>
  <div class="searchActions">
    <div class="searchInput">
      <InputItem
        :value="searchQuery"
        @input="updateSearchQuery"
        @keyup.enter="fetchNews" />
    </div>
    <div class="searchButton">
      <ButtonItem :disabled="!searchQuery" @click="fetchNews">
        Искать
      </ButtonItem>
    </div>
  </div>
  <button v-if="page < totalPages" @click="fetchMoreNews">
    Загрузить еще...
  </button>
</template>

<script>
  import SearchActions from "./SearchActions.model";

  export default SearchActions;
</script>

<style lang="scss" scoped>
  @import "./SearchActions.module";
</style>
