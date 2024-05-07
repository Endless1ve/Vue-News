<script setup>
  import { onMounted } from "vue";
  import { MainHeader, useHeaderStore } from "@/widgets/Header";

  const headerStore = useHeaderStore();

  onMounted(() => {
    headerStore.setHeaderLigth();
  });
</script>

<template>
  <div>
    <MainHeader />
  </div>
</template>

<style lang="scss" scoped></style>
