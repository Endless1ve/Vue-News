import axios from "axios";

const popularNewsModule = {
  state: () => ({
    popularQuery: "Frontend",
    popularNews: [],
    pageSize: 8,
    page: 1,
    isPopularLoading: false,
  }),

  getters: {
    popularNews(state) {
      return state.popularNews;
    },

    isPopularLoading(state) {
      return state.isPopularLoading;
    },
  },

  mutations: {
    setPopularNews(state, news) {
      state.popularNews = news;
    },
  },

  actions: {
    async fetchPopularNews({ state, commit, rootState }) {
      try {
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
      }
    },
  },
  namespaced: true,
};

export default popularNewsModule;
