<template>
  <ul class="linksList">
    <li class="linkItem">
      <RouterLink to="/">Главная</RouterLink>
    </li>
    <li class="linkItem">
      <RouterLink to="/about">О проекте</RouterLink>
    </li>
  </ul>
</template>

<script>
  import NavigationLinks from "./NavigationLinks.model";

  export default NavigationLinks;
</script>

<style lang="scss" scoped>
  @import "./NavigationLinks.module";
</style>
