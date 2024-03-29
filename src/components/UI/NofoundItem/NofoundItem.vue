<template>
  <div class="noFound">
    <IconBase class="loupeBase" :width="83" :height="83" :iconName="'Лупа'">
      <LoupeIcon />
    </IconBase>
    <div class="content">
      <p class="title">Ничего не найдено</p>
      <p class="description">
        К сожалению по вашему запросу ничего не найдено.
      </p>
    </div>
  </div>
</template>

<script>
  import NofoundItem from "./NofoundItem.model";

  export default NofoundItem;
</script>

<style lang="scss" scoped>
  @import "./NofoundItem.module";
</style>
