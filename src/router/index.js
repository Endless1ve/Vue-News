import store from "@/store";
import HomeView from "@/views/HomeView/HomeView.vue";
import { createRouter, createWebHashHistory } from "vue-router";

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

router.beforeEach((to, from, next) => {
  store.commit("Menu/closeMenu");
  next();
});

export default router;
