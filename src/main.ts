import { createApp } from "vue";
import { router } from "./router";
import { createPinia } from "pinia";

import App from "./App.vue";

// init mock api
import { worker } from "./mocks/browser";
worker.start();

createApp(App).use(router).use(createPinia()).mount("#app");
