import { createStore } from "vuex";

import newsModule from "./modules/news/newsModule";
import dateModule from "./modules/date/dateModule";
import popularNewsModule from "./modules/popularNews/popularNewsModule";

const store = createStore({
  modules: {
    news: newsModule,
    date: dateModule,
    popularNews: popularNewsModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
