import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";
import "element3/lib/theme-chalk/index.css";
import Element3 from "element3";
import "./styles/style.css";
import App from "./App.vue";
// init mock api
import { worker } from "./mocks/browser";
worker.start();
createApp(App).use(router).use(createPinia()).use(Element3).mount("#app");
