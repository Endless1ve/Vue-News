const DateModule = {
  state: () => ({
    dateNow: "",
    dateWeekAgo: "",
  }),
  getters: {
    getDateNow(state) {
      return state.dateNow;
    },
  },
  mutations: {
    setCurrentDate(state, date) {
      state.dateNow = date;
    },
    setWeekAgoDate(state, date) {
      state.dateWeekAgo = date;
    },
  },
  actions: {
    getDate({ commit }) {
      let currentDate = new Date();
      let oneWeekAgo = new Date(currentDate);

      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      currentDate = currentDate.toISOString().slice(0, 10);
      oneWeekAgo = oneWeekAgo.toISOString().slice(0, 10);

      commit("setCurrentDate", currentDate);
      commit("setWeekAgoDate", oneWeekAgo);
    },
  },
  namespaced: true,
};

export default DateModule;
