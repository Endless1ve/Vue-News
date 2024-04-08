import newsState from "./newsHandlers/newsState";
import newsGetters from "./newsHandlers/newsGetters";
import newsMutations from "./newsHandlers/newsMutations";
import newsActions from "./newsHandlers/newsActions";

const newsModule = {
  state: newsState,
  getters: newsGetters,
  mutations: newsMutations,
  actions: newsActions,
  namespaced: true,
};

export default newsModule;
