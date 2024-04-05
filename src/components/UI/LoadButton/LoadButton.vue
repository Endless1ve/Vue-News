<template>
  <button class="button"><slot></slot></button>
</template>

<script>
  import LoadButton from "./LoadButton.model";

  export default LoadButton;
</script>

<style lang="scss" scoped>
  @import "./LoadButton.module";
</style>
