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

export default router;
