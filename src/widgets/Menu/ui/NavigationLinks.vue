<script setup>
  import MenuLink from "@/shared/ui/MenuLink/MenuLink.vue";
</script>

<template>
  <ul class="navigationLinks">
    <li class="linkItem">
      <MenuLink :to="'/'">Главная</MenuLink>
    </li>
    <li class="linkItem">
      <MenuLink :to="'/about'">О проекте</MenuLink>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
  .navigationLinks {
    align-items: center;
    @include flex-row;
    @include gap-check-supports(0, 30px);

    @media screen and (max-width: 650px) {
      align-items: flex-start;
      @include gap-check-supports(20px, 0);
      @include flex-column;
    }
  }
</style>
