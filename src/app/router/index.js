import { createRouter, createWebHashHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHashHistory("/Vue-News/"),
  routes,
});

export default router;
