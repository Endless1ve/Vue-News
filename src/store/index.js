import { createStore } from "vuex";

import NewsModule from "./modules/NewsModule";
import DateModule from "./modules/DateModule";

const store = createStore({
  modules: {
    news: NewsModule,
    date: DateModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
