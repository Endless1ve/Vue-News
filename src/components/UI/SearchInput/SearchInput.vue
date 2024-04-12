<template>
  <input
    type="text"
    class="input"
    placeholder="Введите тему новости"
    v-model.trim="query" />
</template>

<script>
  import SearchInput from "./SearchInput.model";

  export default SearchInput;
</script>

<style lang="scss" scoped>
  @import "./SearchInput.module";
</style>
