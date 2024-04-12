<template>
  <div class="searchActions">
    <div>
      <SearchInput
        @keyup.enter="fetchNews"
        @input="validateSearchInput"
        v-focus />
      <ErrorItem class="searchError" :visibilityProp="isSearchError">
        Поле не должно быть пустым
      </ErrorItem>
    </div>
    <div class="searchButton">
      <ButtonItem @click="fetchNews" :disabled="!searchQuery">
        Искать
      </ButtonItem>
    </div>
  </div>
</template>

<script>
  import SearchActions from "./SearchActions.model";

  export default SearchActions;
</script>

<style lang="scss" scoped>
  @import "./SearchActions.module";
</style>
