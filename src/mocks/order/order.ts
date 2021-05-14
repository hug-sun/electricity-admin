import { rest } from "msw";
let orderData = [
  {
    // orderID: {
    //   number: "wx93287692686589952",
    //   remarks: "用户已删除",
    // },
    orderID: "1wx93287692686589952",
    remarks: "用户已删除",
    OrderType: "[普通订单]",
    UserInfo: "cremb",
    // productInfo: {
    //   describe:
    //     "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    //   imageSrc:
    //     "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    //   price: "￥76.00 x 1",
    // },
    describe:
      "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    imageSrc:
      "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    price: "￥76.00 x 1",
    totalPrice: 76.0,
    time: "2021-02-17 10:11:59",
    userNotes: "",
    businessNotes: "",
    payment: 86.0,
    paymentTime: "",
    paymentStatus: "未支付",
    OrderStatus: "未支付",
    originalPostage: 10.0,
    actualPostage: 10.0,
    integral: 0,
  },
  {
    // orderID: {
    //   number: "wx93287692686589952",
    //   remarks: "用户已删除",
    // },
    orderID: "2wx93287692686589952",
    remarks: "用户已删除",
    OrderType: "[普通订单]",
    UserInfo: "cremb",
    // productInfo: {
    //   describe:
    //     "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    //   imageSrc:
    //     "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    //   price: "￥76.00 x 1",
    // },
    describe:
      "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    imageSrc:
      "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    price: "￥76.00 x 1",
    totalPrice: 76.0,
    time: "2021-02-17 10:11:59",
    userNotes: "",
    businessNotes: "",
    payment: 86.0,
    paymentTime: "",
    paymentStatus: "未支付",
    OrderStatus: "未支付",
    originalPostage: 10.0,
    actualPostage: 10.0,
    integral: 0,
  },
  {
    // orderID: {
    //   number: "wx93287692686589952",
    //   remarks: "用户已删除",
    // },
    orderID: "3wx93287692686589952",
    remarks: "用户已删除",
    OrderType: "[普通订单]",
    UserInfo: "cremb",
    // productInfo: {
    //   describe:
    //     "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    //   imageSrc:
    //     "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    //   price: "￥76.00 x 1",
    // },
    describe:
      "橙舍天然竹制优质楠竹韧性好自由组合可选家居防尘收纳收纳筐竹子组合柜布框 B款收纳筐-米色 | A款收纳筐-灰色",
    imageSrc:
      "http://open.crmeb.net/uploads/attach/2020/12/29/9c95891b07cc87fe3b72365e628e9336.jpg",
    price: "￥76.00 x 1",
    totalPrice: 76.0,
    time: "2021-02-17 10:11:59",
    userNotes: "",
    businessNotes: "",
    payment: 86.0,
    paymentTime: "",
    paymentStatus: "未支付",
    OrderStatus: "未支付",
    originalPostage: 10.0,
    actualPostage: 10.0,
    integral: 0,
  },
];
interface bodyValue {
  orderID: string;
}
export const orderHandlers = [
  rest.post("/login", (req, res, ctx) => {
    // Persist user's authentication in the session
    sessionStorage.setItem("is-authenticated", "true");
    return res(
      // Respond with a 200 status code
      ctx.status(200)
    );
  }),
  rest.get("/user", (req, res, ctx) => {
    // Check if the user is authenticated in this session
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      // If not authenticated, respond with a 403 error
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    // If authenticated, return a mocked user details
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
  rest.get("/orderlist", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({ orderData, totalLength: orderData.length })
    );
  }),
  rest.post<bodyValue>("/changeOrderData", (req, res, ctx) => {
    const { orderID } = req.body;
    orderData = orderData.map((item) => {
      if (orderID === item.orderID) {
        item = { ...item, ...req.body };
      }
      return item;
    });
    return res(ctx.status(200), ctx.json(orderData));
  }),
  rest.post("/deleteOrder", (req, res, ctx) => {
    orderData = orderData.filter((item) => req.body !== item.orderID);
    console.log(orderData);
    return res(
      ctx.status(200),
      ctx.json({ orderData, totalLength: orderData.length })
    );
  }),
];
