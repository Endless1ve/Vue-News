<template>
  <div class="popularList">
    <PopularItem v-for="item in popularNews" :key="item.title" :item="item" />
  </div>
</template>

<script>
  import PopularList from "./PopularList.model";

  export default PopularList;
</script>

<style lang="scss" scoped>
  @import "./PopularList.module";
</style>
