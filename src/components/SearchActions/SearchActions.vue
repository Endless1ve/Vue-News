<template>
  <div class="searchActions">
    <div>
      <InputItem @keyup.enter="fetchNews" @input="validateSearchInput" />
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
