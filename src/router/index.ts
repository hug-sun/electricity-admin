import { createRouter, createWebHistory } from "vue-router";
import BasicLayout from "@/components/main/Index.vue";
import orderRoutes from "./modules/order";
import user from "./modules/user";
import product from "./modules/product";

const routers: any = [
  // {
  //   path: "/admin/home",
  //   component: BasicLayout
  // },
  // {
  //   path: '/product',
  //   redirect: '/product_list',
  // },
  ...user,
  ...orderRoutes,
  ...product,
];
export const router = createRouter({
  history: createWebHistory(),
  routes: routers,
});
