export default () => ({
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
});
