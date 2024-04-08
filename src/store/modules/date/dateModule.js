import dateState from "./dateHandlers/dateState";
import dateGetters from "./dateHandlers/dateGetters";
import dateMutations from "./dateHandlers/dateMutations";
import dateActions from "./dateHandlers/dateActions";

const dateModule = {
  state: dateState,
  getters: dateGetters,
  mutations: dateMutations,
  actions: dateActions,
  namespaced: true,
};

export default dateModule;
