import { ref } from "vue";
import { defineStore } from "pinia";

export const useHeaderStore = defineStore("header", () => {
  const isHeaderLight = ref(false);

  function setHeaderLigth() {
    isHeaderLight.value = true;
  }

  function setHeaderDark() {
    isHeaderLight.value = false;
  }
  return { isHeaderLight, setHeaderLigth, setHeaderDark };
});
