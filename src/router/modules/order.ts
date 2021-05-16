import BasicLayout from "@/components/main/main";
const orderRoutes = [
  {
    path: "/admin/home",
    component: BasicLayout,
    children: [
      {
        path: "/admin/order/list",
        component: () => import("@/view/order/List.vue"),
      },
    ],
  },
  {
    path: "/",
    redirect: "/admin/home",
  },
];

export default orderRoutes;
