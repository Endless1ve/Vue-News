<template>
  <header
    class="header"
    :class="{
      headerLight: isHeaderLight,
      headerDark: isMenuOpen && !isLargeScreen,
    }">
    <p class="headerLogo">VueNews</p>
    <HeaderMenu v-if="isMenuOpen || isLargeScreen" />
    <burgerButton @click="toggleMenu" />
  </header>
</template>

<script>
  import MainHeader from "./MainHeader.model";

  export default MainHeader;
</script>

<style lang="scss" scoped>
  @import "./MainHeader.module";
</style>
