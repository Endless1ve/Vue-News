import { createStore } from "vuex";

import newsModule from "./modules/news/newsModule";
import dateModule from "./modules/date/dateModule";

const store = createStore({
  modules: {
    news: newsModule,
    date: dateModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
