<template>
  <div class="preloader">
    <PreloaderItem />
    <p class="preloaderText">Идёт поиск новостей...</p>
  </div>
</template>

<script>
  import PreloaderBlock from "./PreloaderBlock.model";

  export default PreloaderBlock;
</script>

<style lang="scss" scoped>
  @import "./PreloaderBlock.module";
</style>
