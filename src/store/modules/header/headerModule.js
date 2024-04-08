import headerState from "./headerHandlers/headerState";
import headerGetters from "./headerHandlers/headerGetters";
import headerMutations from "./headerHandlers/headerMutations";
import headerActions from "./headerHandlers/headerActions";

const headerModule = {
  state: headerState,
  getters: headerGetters,
  mutations: headerMutations,
  actions: headerActions,
  namespaced: true,
};

export default headerModule;
