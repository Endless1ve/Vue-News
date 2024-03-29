<template>
  <nav class="headerMenu">
    <NavigationLinks :class="{ 'link-light': isHeaderLight || isMenuOpen }" />
    <MenuIcons />
  </nav>
</template>

<script>
  import HeaderMenu from "./HeaderMenu.model";

  export default HeaderMenu;
</script>

<style lang="scss" scoped>
  @import "./HeaderMenu.module";
</style>
