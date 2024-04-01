import { createStore } from "vuex";

import HeaderModule from "./modules/HeaderModule";
import MenuModule from "./modules/MenuModule";
import AuthModule from "./modules/AuthModule";

const store = createStore({
  modules: {
    header: HeaderModule,
    menu: MenuModule,
    auth: AuthModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
