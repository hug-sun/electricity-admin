import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import orderRoutes from "./modules/order";
import Home from "../view/Home.vue";
import Details from "../view/Details.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/details",
    name: "Details",
    component: Details,
  },
  ...orderRoutes,
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
