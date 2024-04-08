import authState from "./authHandlers/authState";
import authGetters from "./authHandlers/authGetters";
import authMutations from "./authHandlers/authMutations";
import authActions from "./authHandlers/authActions";

const authModule = {
  state: authState,
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
  namespaced: true,
};

export default authModule;
