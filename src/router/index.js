import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store";

import HomeView from "@/views/HomeView/HomeView.vue";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/AboutView/AboutView.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory("/Vue-News/"),
  routes,
});

router.beforeEach((from, to, next) => {
  store.commit("menu/closeMenu");
  next();
});

export default router;
