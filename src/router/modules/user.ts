import BasicLayout from "@/components/main/main";

const pre = "user_";

export default {
  path: "/admin/user",
  name: "user",
  redirect: {
    name: `${pre}list`,
  },
  component: BasicLayout,
  children: [
    {
      path: "list",
      name: `${pre}list`,
      component: () => import("@/view/user/list/index.vue"),
    },
    {
      path: "group",
      name: `${pre}group`,
      component: () => import("@/view/user/group/index.vue"),
    },
    {
      path: "label",
      name: `${pre}label`,
      component: () => import("@/view/user/label/index.vue"),
    },
  ],
};
