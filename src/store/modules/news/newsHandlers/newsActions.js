import axios from "axios";

export default {
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
};
