<template>
  <button class="button" type="button"><slot></slot></button>
</template>

<script>
  import ButtonItem from "./ButtonItem.model";

  export default ButtonItem;
</script>

<style lang="scss" scoped>
  @import "./ButtonItem.module";
</style>
