import { createStore } from "vuex";

import HeaderModule from "./modules/HeaderModule";

const store = createStore({
  modules: {
    header: HeaderModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
