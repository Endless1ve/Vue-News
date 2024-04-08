import { createStore } from "vuex";

import headerModule from "./modules/header/headerModule";
import menuModule from "./modules/menu/menuModule";
import authModule from "./modules/auth/authModule";

const store = createStore({
  modules: {
    header: headerModule,
    menu: menuModule,
    auth: authModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
