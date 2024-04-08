export default {
  updateSearchQuery(state, query) {
    state.searchQuery = query;
  },

  setNews(state, news) {
    state.news = news;
  },

  setNewsCounter(state, num) {
    state.newsCounter = num;
  },

  increaseNewsCounter(state, num) {
    state.newsCounter += num;
  },

  setTotalNews(state, num) {
    state.totalNews = num;
  },

  setPopularNews(state, news) {
    state.popularNews = news;
  },

  setMoreNews(state, bool) {
    state.isMoreNews = bool;
  },

  setNewsLoading(state, bool) {
    state.isNewsLoading = bool;
  },

  setPopularLoading(state, bool) {
    state.isPopularLoading = bool;
  },

  setNoResults(state, bool) {
    state.isNoResults = bool;
  },
};
