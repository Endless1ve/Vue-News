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
      state.newsCounter = state.newsCounter + num;
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
          const response = await axios.get(
            "https://nomoreparties.co/news/v2/everything",
            {
              params: {
                apiKey: process.env.VUE_APP_NEWS_API_KEY_SECOND,
                q: state.searchQuery,
                from: rootState.date.dateWeekAgo,
                to: rootState.date.dateNow,
              },
            }
          );
          commit("setTotalNews", response.data.articles.length);
          commit("setNews", response.data.articles);
          commit("setNewsCounter", 0);
          dispatch("renderNews");
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
      if (state.newsCounter < state.totalNews) {
        commit("increaseNewsCounter", state.renderSize);
        commit("setMoreNews", true);
      } else commit("setMoreNews", false);
    },
  },
  namespaced: true,
};

export default NewsModule;
