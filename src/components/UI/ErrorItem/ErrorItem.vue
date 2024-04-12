<template>
  <p class="error" :class="{ visible: visibilityProp }"><slot></slot></p>
</template>

<script>
  import ErrorItem from "./ErrorItem.model";

  export default ErrorItem;
</script>

<style lang="scss" scoped>
  @import "./ErrorItem.module";
</style>
