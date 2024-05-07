<script setup>
  const $props = defineProps({
    to: {
      type: String,
      required: true,
    },
  });
</script>

<template>
  <RouterLink class="link" :to="$props.to"><slot></slot></RouterLink>
</template>

<style lang="scss" scoped>
  .link {
    font-family: $text-font;
    font-weight: 500;
    font-size: 18px;
    line-height: 133%;
    text-align: center;
    color: currentColor;
  }
</style>
