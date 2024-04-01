<template>
  <header class="header" :class="{ 'header-light': isHeaderLight }">
    <p class="headerLogo">VueNews</p>
    <HeaderMenu />
  </header>
</template>

<script>
  import MainHeader from "./MainHeader.model";

  export default MainHeader;
</script>

<style lang="scss" scoped>
  @import "./MainHeader.module";
</style>
