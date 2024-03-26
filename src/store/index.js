import { createStore } from "vuex";
import HeaderModule from "./modules/HeaderModule";
import MenuModule from "./modules/MenuModule";

const store = createStore({
  modules: {
    Header: HeaderModule,
    Menu: MenuModule,
  },
  strict: process.env.NODE_ENV !== "production",
});

export default store;
