import { rest } from "msw";
import data from "./productsList";

function getObj(url: string) {
  const obj = {};
  if (/\?/.test(url)) {
    const index = url.indexOf("?");
    const Astr = url.substr(index + 1);
    const Aarr = Astr.split("&");
    for (let i = 0; i < Aarr.length; i++) {
      const Cstr = Aarr[i];
      const Barr = Cstr.split("=");
      obj[Barr[0]] = Barr[1];
    }
  }
  return obj;
}

export const products = [
  // 获取商品管理 > 出售中的商品 >tab列表以及数量
  rest.get("/adminapi/product/product/type_header", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        list: [
          { type: 1, name: "出售中的商品", count: 2 },
          { type: 2, name: "仓库中的商品", count: 0 },
          { type: 4, name: "已经售馨商品", count: 1 },
          { type: 5, name: "警戒库存商品", count: 1 },
          { type: 6, name: "回收站的商品", count: 2 },
        ],
        msg: "ok",
        status: 200,
      })
    );
  }),

  //获取商品管理 > 出售中的商品>商品分类选项数据
  rest.get("/adminapi/product/category/tree/1", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        msg: "ok",
        data: [
          {
            id: 3,
            pid: 0,
            cate_name: "数码",
            sort: 0,
            pic:
              "http://open.crmeb.net/uploads/attach/2020/12/20201229/8769278e4cc0773bb039913b4cf5c16f.jpg",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----",
          },
          {
            id: 13,
            pid: 3,
            cate_name: "手机",
            sort: 3,
            pic:
              "http://open.crmeb.net/uploads/attach/2020/12/20201229/8769278e4cc0773bb039913b4cf5c16f.jpg",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
          {
            id: 14,
            pid: 3,
            cate_name: "相机",
            sort: 2,
            pic:
              "http://open.crmeb.net/uploads/attach/2020/12/20201229/10d6822041dcaa57f33e039d0e04be63.jpg",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
          {
            id: 15,
            pid: 3,
            cate_name: "游戏娱乐",
            sort: 1,
            pic:
              "http://open.crmeb.net/uploads/attach/2020/12/20201229/a05c5b2ce3ae1078dcb4693eed8e4472.jpg",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
          {
            id: 2,
            pid: 0,
            cate_name: "服饰",
            sort: 0,
            pic: "",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----",
          },
          {
            id: 18,
            pid: 2,
            cate_name: "童装",
            sort: 0,
            pic: "",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
          {
            id: 17,
            pid: 2,
            cate_name: "男装",
            sort: 0,
            pic: "",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
          {
            id: 16,
            pid: 2,
            cate_name: "女装",
            sort: 0,
            pic: "",
            is_show: 1,
            add_time: "1970-01-01 08:00:00",
            big_pic: "",
            html: "|-----|-----",
          },
        ],
      })
    );
  }),

  //获取商品管理 > 商品 > 表格数据
  rest.get("/adminapi/product/product", (req, res, ctx) => {
    const searchUrl = getObj(req.url.search);
    return res(
      ctx.status(200),
      ctx.json({
        msg: "ok",
        list: data.filter((item) => item.spec_type == searchUrl.type),
      })
    );
  }),

  // 获取商品管理 > 出售中的商品 >商品编辑上下架
  rest.put("/product/product/set_show/:id/:show", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        msg: "ok",
        list: data
          .map((item) => {
            if (item.id === +req.params.id) {
              item.is_show = req.params.show;
            }
            return item;
          })
          .filter((e) => e.id === +req.params.id),
      })
    );
  }),

  // 获取商品管理 > 出售中的商品 >批量下架
  rest.put("/product/product/product_unshow", (req, res, ctx) => {
    console.log(req);
    return res(
      ctx.status(200),
      ctx.json({
        msg: "ok",
        list: data,
      })
    );
  }),
];
