import axios from "axios";

const NewsModule = {
  state: () => ({
    searchQuery: "",
    savedQuery: "",
    popularSearchQuery: "JavaScript",
    news: [],
    popularNews: [],

    page: 1,
    currentPage: 1,
    pageSize: 3,
    language: "ru",

    currentDate: "",
    oneWeekAgo: "",

    isNewsSearching: false,
    noResults: false,
  }),
  mutations: {
    updateSearchQuery(state, query) {
      state.searchQuery = query;
    },

    setSavedQuery(state) {
      state.savedQuery = state.searchQuery;
    },

    setPopularNews(state, popularNews) {
      state.popularNews = popularNews;
    },

    setNews(state, news) {
      state.news = news;
    },

    addMoreNews(state, news) {
      state.news.push(...news);
    },

    setPreloader(state) {
      state.isNewsSearching = true;
    },

    removePreloader(state) {
      state.isNewsSearching = false;
    },

    setNoResults(state) {
      state.noResults = true;
    },

    removeNoResults(state) {
      state.noResults = false;
    },

    setCurrentDate(state, date) {
      state.currentDate = date;
    },

    setWeekAgoDate(state, date) {
      state.oneWeekAgo = date;
    },

    setCurrentPage(state) {
      state.currentPage += 1;
    },
  },
  actions: {
    setDate({ commit }) {
      let currentDate = new Date();
      let oneWeekAgo = new Date(currentDate);
      oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
      currentDate = currentDate.toISOString().slice(0, 10);
      oneWeekAgo = oneWeekAgo.toISOString().slice(0, 10);
      commit("setCurrentDate", currentDate);
      commit("setWeekAgoDate", oneWeekAgo);
    },

    async fetchNews({ state, commit }) {
      try {
        commit("setPreloader");
        commit("setSavedQuery");
        const response = await axios.get(
          `https://nomoreparties.co/news/v2/everything?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`,
          {
            headers: {
              Authorization: `${process.env.VUE_APP_NEWS_API_KEY}`,
            },
            params: {
              q: state.searchQuery,
              from: state.currentDate,
              to: state.oneWeekAgo,
              language: state.language,
              pageSize: state.pageSize,
              page: state.page,
            },
          }
        );
        commit("setNews", response.data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        commit("removePreloader");
      }
    },

    async fetchMoreNews({ state, commit }) {
      try {
        commit("setCurrentPage");
        const response = await axios.get(
          `https://nomoreparties.co/news/v2/everything?apiKey=${process.env.VUE_APP_NEWS_API_KEY}`,
          {
            headers: {
              Authorization: `${process.env.VUE_APP_NEWS_API_KEY}`,
            },
            params: {
              q: state.savedQuery,
              from: state.currentDate,
              to: state.oneWeekAgo,
              language: state.language,
              pageSize: state.pageSize,
              page: state.currentPage,
            },
          }
        );
        commit("addMoreNews", response.data.articles);
      } catch (err) {
        console.log(err);
      }
    },

    async fetchPopularNews({ state, commit }) {
      try {
        const response = await axios.get(
          `https://nomoreparties.co/news/v2/everything?q=${state.popularSearchQuery}&from=${state.currentDate}&to=${state.oneWeekAgo}&language=ru&pageSize=8&page=1&apiKey=${process.env.VUE_APP_NEWS_API_KEY}`
        );
        commit("setPopularNews", response.data.articles);
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};

export default NewsModule;
