import axios from "axios";

const NewsModule = {
  state: () => ({
    searchQuery: "",
    popularQuery: "Фронтенд",

    news: [],
    totalNews: 0,

    newsCounter: 0,
    renderSize: 3,

    popularNews: [],
    pageSize: 8,
    page: 1,

    isPopularLoading: false,
    isNewsLoading: false,
    isMoreNews: false,
    isNoResults: false,
  }),

  getters: {
    searchQuery(state) {
      return state.searchQuery;
    },

    isNewsLoading(state) {
      return state.isNewsLoading;
    },

    news(state) {
      return state.news;
    },

    newsCounter(state) {
      return state.newsCounter;
    },

    isMoreNews(state) {
      return state.isMoreNews;
    },

    isNoResults(state) {
      return state.isNoResults;
    },
  },

  mutations: {
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
  },

  actions: {
    async fetchPopularNews({ state, commit, rootState }) {
      try {
        commit("setPopularLoading", true);
        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: process.env.VUE_APP_NEWS_API_KEY_SECOND,
              q: state.popularQuery,
              from: rootState.date.dateWeekAgo,
              to: rootState.date.dateNow,
              sortBy: "popularity",
              lang: "ru",
              pageSize: state.pageSize,
              page: state.page,
            },
          }
        );
        commit("setPopularNews", response.data.articles);
      } catch (err) {
        console.log(err);
      } finally {
        commit("setPopularLoading", false);
      }
    },

    async fetchNews({ state, commit, dispatch, rootState }) {
      try {
        if (state.searchQuery) {
          commit("setNewsLoading", true);
          commit("setNoResults", false);
          const response = await axios.get(
            "https://nomoreparties.co/news/v2/everything",
            {
              params: {
                apiKey: process.env.VUE_APP_NEWS_API_KEY_SECOND,
                q: state.searchQuery,
                from: rootState.date.dateWeekAgo,
                to: rootState.date.dateNow,
                sortBy: "publishedAt",
              },
            }
          );
          commit("setTotalNews", response.data.articles.length);
          commit("setNewsCounter", 0);
          if (state.totalNews > 0) {
            commit("setNews", response.data.articles);
            dispatch("renderNews");
          } else {
            commit("setNoResults", true);
          }
        } else {
          alert("Введите ключевое слово в строку поиска");
        }
      } catch (err) {
        console.log(err);
      } finally {
        commit("setNewsLoading", false);
      }
    },

    renderNews({ state, commit }) {
      commit("increaseNewsCounter", state.renderSize);
      if (state.newsCounter < state.totalNews) {
        commit("setMoreNews", true);
      } else commit("setMoreNews", false);
    },
  },
  namespaced: true,
};

export default NewsModule;
