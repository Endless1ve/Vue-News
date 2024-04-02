import { createStore } from "vuex";

import NewsModule from "./modules/NewsModule";

const store = createStore({
  modules: {
    NewsModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
