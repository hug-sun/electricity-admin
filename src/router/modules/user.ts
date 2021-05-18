import BasicLayout from "@/components/main/Index.vue";

const pre = "user_";

const user = [
  {
    path: "/admin/user",
    component: BasicLayout,
    redirect: {
      name: `${pre}list`,
    },
    children: [
      {
        path: "list",
        name: `${pre}list`,
        meta: {
          title: "用户列表",
        },
        component: () => import("@/view/user/list/index.vue"),
      },
      {
        path: "group",
        name: `${pre}group`,
        meta: {
          title: "用户分组",
        },
        component: () => import("@/view/user/group/index.vue"),
      },
      {
        path: "label",
        name: `${pre}label`,
        meta: {
          title: "用户标签",
        },
        component: () => import("@/view/user/label/index.vue"),
      },
    ],
  },
];

export default user;
