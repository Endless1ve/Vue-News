import axios from "axios";

const newsModule = {
  state: () => ({
    searchQuery: "",
    news: [],

    isInputValid: false,
    errorText: "Поле не должно быть пустым",
    isSearchError: false,
  }),

  getters: {
    searchQuery(state) {
      return state.searchQuery;
    },

    errorText(state) {
      return state.errorText;
    },

    isSearchError(state) {
      return state.isSearchError;
    },

    isInputValid(state) {
      return state.isInputValid;
    },
  },

  mutations: {
    updateSearchQuery(state, query) {
      state.searchQuery = query;
    },

    setNews(state, data) {
      state.news = data;
    },

    toggleSearchError(state, bool) {
      state.isSearchError = bool;
    },

    toggleInputValidity(state, bool) {
      state.isInputValid = bool;
    },
  },

  actions: {
    validateSearchInput({ state, commit }) {
      if (state.searchQuery.length === 0) {
        commit("toggleSearchError", true);
        commit("toggleInputValidity", false);
      } else {
        commit("toggleSearchError", false);
        commit("toggleInputValidity", true);
      }
    },

    async fetchNews({ state, commit, dispatch, rootState }) {
      try {
        dispatch("validateSearchInput");

        if (state.isInputValid) {
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
        }
      } catch (err) {
        console.log(err);
      }
    },
  },
  namespaced: true,
};

export default newsModule;
