import menuState from "./menuHandlers/menuState";
import menuGetters from "./menuHandlers/menuGetters";
import menuMutations from "./menuHandlers/menuMutations";
import menuActions from "./menuHandlers/menuActions";

const menuModule = {
  state: menuState,
  getters: menuGetters,
  mutations: menuMutations,
  actions: menuActions,
  namespaced: true,
};

export default menuModule;
