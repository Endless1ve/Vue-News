<template>
  <header
    class="header"
    :class="{ 'header-light': isHeaderLight, 'header-dark': isMenuOpen }">
    <p class="headerLogo">VueNews</p>
    <HeaderMenu v-if="isMenuOpen || isLargeScreen" />
  </header>
</template>

<script>
  import MainHeader from "./MainHeader.model";

  export default MainHeader;
</script>

<style lang="scss" scoped>
  @import "./MainHeader.module";
</style>
