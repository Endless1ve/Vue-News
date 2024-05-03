<script setup></script>

<template>
  <div class="menu"></div>
</template>

<style lang="scss" scoped>
  .menu {
    @include flex-row;
    @include gap-check-supports(0, 70px);

    @media screen and (max-width: 768px) {
      @include gap-check-supports(0, 50px);
    }

    @media screen and (max-width: 650px) {
      position: absolute;
      top: 102%;
      left: 0;
      width: 100%;
      border-radius: 0 0 20px 20px;
      padding: 20px 40px 40px;
      color: $main-light-color;
      background-color: $main-dark-color;
      @include flex-column-reverse;
    }

    @media screen and (max-width: 425px) {
      padding: 20px 16px 40px;
    }
  }
</style>
