import axios from "axios";

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
  },
  actions: {
    async fetchNews({ state, commit }) {
      try {
        commit("setNewsLoading", true);

        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: "97b7f9eb48c34d13a7461ddeb9126240",
              q: state.searchQuery,
              from: "2024-03-10",
              to: "2024-03-17",
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

    async fetchMoreNews({ state, commit }) {
      try {
        commit("setNewsLoading", true);
        commit("setPage", state.page + 1);

        const response = await axios.get(
          "https://nomoreparties.co/news/v2/everything",
          {
            params: {
              apiKey: "97b7f9eb48c34d13a7461ddeb9126240",
              q: state.savedQuery,
              from: "2024-03-10",
              to: "2024-03-17",
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
