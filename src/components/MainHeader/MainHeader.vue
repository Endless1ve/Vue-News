<template>
  <header class="header" :class="themeClass">
    <p class="headerLogo">VueNews</p>
    <HeaderMenu v-if="isMenuOpen || isLargeScreen" />
    <BurgerButton @click="toggleMenu" />
  </header>
</template>

<script>
  import MainHeader from "./MainHeader.model";

  export default MainHeader;
</script>

<style lang="scss" scoped>
  @import "./MainHeader.module";
</style>
