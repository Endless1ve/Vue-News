<template>
  <div class="searchActions">
    <InputItem @keyup.enter="fetchNews" />
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
