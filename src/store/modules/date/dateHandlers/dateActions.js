export default {
  getDate({ commit }) {
    let currentDate = new Date();
    let oneWeekAgo = new Date(currentDate);

    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    currentDate = currentDate.toISOString().slice(0, 10);
    oneWeekAgo = oneWeekAgo.toISOString().slice(0, 10);

    commit("setCurrentDate", currentDate);
    commit("setWeekAgoDate", oneWeekAgo);
  },
};
