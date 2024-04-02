<template>
  <input
    type="text"
    class="input"
    placeholder="Введите тему новости"
    v-model.trim="query" />
</template>

<script>
  import InputItem from "./InputItem.model";

  export default InputItem;
</script>

<style lang="scss" scoped>
  @import "./InputItem.module";
</style>
