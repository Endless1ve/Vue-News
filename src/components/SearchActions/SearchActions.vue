<template>
  <div class="searchActions">
    <InputItem />
    <div class="searchButton">
      <ButtonItem>Искать</ButtonItem>
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
