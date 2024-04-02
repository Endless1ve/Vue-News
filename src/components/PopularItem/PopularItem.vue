<template>
  <article class="popularItem">
    <a :href="item.url" target="_blank" class="itemLink">
      <h5 class="itemTitle">
        {{ item.title }}
      </h5>
      <p class="itemAuthor">{{ item.source.name }}</p>
    </a>
  </article>
</template>

<script>
  import PopularItem from "./PopularItem.model";

  export default PopularItem;
</script>

<style lang="scss" scoped>
  @import "./PopularItem.module";
</style>
