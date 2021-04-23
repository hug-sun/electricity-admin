import Index from "@/view/index/Index.vue";
const orderRoutes = [
  {
    path: "/admin/home",
    component: Index,
    children: [
      {
        path: "/order",
        children: [
          { path: "/list", component: () => import("@/view/order/List.vue") },
        ],
      },
    ],
  },
  {
    path: "/",
    redirect: "/admin/home",
  },
];

export default orderRoutes;
