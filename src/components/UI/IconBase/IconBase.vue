<template>
  <svg
    class="icon"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    :iconName="iconName"
    viewBox="0 0 30 30"
    :aria-labelledby="iconName">
    <title :id="iconName" lang="ru">{{ iconName }}</title>
    <g class="icon">
      <slot />
    </g>
  </svg>
</template>

<script>
  import IconBase from "./IconBase.model";

  export default IconBase;
</script>

<style lang="scss" scoped>
  @import "./IconBase.module.scss";
</style>
