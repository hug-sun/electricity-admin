import BasicLayout from "@/components/main/Index.vue";
const pre = "product_";
const product = [
  {
    path: "/admin/product",
    component: BasicLayout,
    children: [
      {
        path: "/admin/product/list",
        name: "productList",
        meta: {
          title: "商品管理",
        },
        component: () => import("@/view/product/productList/index.vue"),
      },
      {
        path: "/product_classify",
        name: `${pre}productClassify`,
        meta: {
          title: "商品分类",
        },
        component: () => import("@/view/product/productClassify.vue"),
      },
      {
        path: "/product_reply/:id?",
        name: `${pre}productEvaluate`,
        meta: {
          title: "商品评论",
        },
        component: () => import("@/view/product/productReply.vue"),
      },
    ],
  },
];

export default product;
