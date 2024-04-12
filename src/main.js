import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VFocus from "./directives/VFocus";

const app = createApp(App);

app.directive("focus", VFocus);

app.use(store).use(router).mount("#app");
