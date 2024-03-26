<template>
  <div class="searchActions">
    <div class="searchInput"><InputItem /></div>
    <div class="searchButton"><ButtonItem>Искать</ButtonItem></div>
  </div>
</template>

<script>
  import SearchActions from "./SearchActions.model";

  export default SearchActions;
</script>

<style lang="scss" scoped>
  @import "./SearchActions.module";
</style>
