import axios from "axios";

const newsModule = {
  state: () => ({
    searchQuery: "",

    news: [],
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

    setNews(state, data) {
      state.news = data;
    },
  },

  actions: {
    async fetchNews({ state, commit, rootState }) {
      try {
        if (state.searchQuery) {
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
          commit("setNews", response.data.articles);
        } else {
          alert("Введите ключевое слово в строку поиска");
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};

export default newsModule;
