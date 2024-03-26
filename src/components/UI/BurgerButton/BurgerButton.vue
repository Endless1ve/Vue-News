<template>
  <div class="burgerButton" :class="{ open: isMenuOpen }">
    <span
      class="burgerEl top"
      :class="{ 'burgerEl-light': isHeaderLight }"></span>
    <span
      class="burgerEl middle"
      :class="{ 'burgerEl-light': isHeaderLight }"></span>
    <span
      class="burgerEl bottom"
      :class="{ 'burgerEl-light': isHeaderLight }"></span>
  </div>
</template>

<script>
  import BurgerButton from "./BurgerButton.model";

  export default BurgerButton;
</script>

<style lang="scss" scoped>
  @import "./BurgerButton.module.scss";
</style>
