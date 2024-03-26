import axios from "axios";
// import DateModule from "./DateModule";

const NewsModule = {
  state: () => ({
    searchQuery: "",
    savedQuery: "",
    popularQuery: "JavaScript",

    news: [],
    popularNews: [],

    newsLimit: 100,
    pageSize: 3,
    page: 1,
    totalPages: 0,
    popularPageSize: 8,
    lang: "ru",

    isNewsLoading: false,
    isPopularLoading: false,
  }),

  mutations: {
    updateSearchQuery(state, query) {
      state.searchQuery = query;
    },

    setSavedQuery(state) {
      state.savedQuery = state.searchQuery;
    },

    setNews(state, news) {
      state.news = news;
    },

    setNewsLoading(state, bool) {
      state.isNewsLoading = bool;
    },

    setPage(state, page) {
      state.page = page;
    },

    setTotalPages(state, pages) {
      state.totalPages = pages;
    },

    setPopularNews(state, news) {
      state.popularNews = news;
    },

    setPopularLoading(state, bool) {
      state.isPopularLoading = bool;
    },
  },
  actions: {
    async fetchPopular({ state, commit, rootState }) {
      try {
        commit("setPopularLoading", true);
        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: "97b7f9eb48c34d13a7461ddeb9126240",
              q: state.searchQuery,
              from: rootState.Date.dateWeekAgo,
              to: rootState.Date.dateNow,
              language: state.language,
              pageSize: state.popularPageSize,
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

    async fetchNews({ state, commit, rootState }) {
      try {
        commit("setNewsLoading", true);
        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: "97b7f9eb48c34d13a7461ddeb9126240",
              q: state.searchQuery,
              from: rootState.Date.dateWeekAgo,
              to: rootState.Date.dateNow,
              language: state.language,
              pageSize: state.pageSize,
              page: state.page,
            },
          }
        );
        if (response.data.totalResults === 0) {
          commit("setTotalPages", 0);
        } else {
          commit("setSavedQuery");
          commit("setNews", response.data.articles);
          if (response.data.totalResults > 100) {
            commit(
              "setTotalPages",
              Math.ceil(state.newsLimit / state.pageSize)
            );
          } else {
            commit(
              "setTotalPages",
              Math.ceil(response.data.totalResults / state.pageSize)
            );
          }
        }
      } catch (err) {
        console.log(err);
      } finally {
        commit("setNewsLoading", false);
      }
    },

    async fetchMoreNews({ state, commit, rootState }) {
      try {
        commit("setNewsLoading", true);
        commit("setPage", state.page + 1);

        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: "97b7f9eb48c34d13a7461ddeb9126240",
              q: state.savedQuery,
              from: rootState.Date.dateWeekAgo,
              to: rootState.Date.dateNow,
              language: state.language,
              pageSize: state.pageSize,
              page: state.page,
            },
          }
        );
        commit("setNews", [...state.news, ...response.data.articles]);
      } catch (err) {
        console.log(err);
      } finally {
        commit("setNewsLoading", false);
      }
    },
  },
  namespaced: true,
};

export default NewsModule;
