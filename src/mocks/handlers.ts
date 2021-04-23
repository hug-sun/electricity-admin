import { rest } from "msw";
// 测试数据
let allData = [
  {
    uid: 1,
    real_name: "zxj",
    card_id: "140621199602174320",
    mark: "测试数据",
    partner_id: 0,
    group_id: "大客户",
    nickname: "uid1",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "13552956626",
    add_time: 1619000896,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "0.00",
    sign_num: 0,
    status: "正常",
    level: 0,
    spread_uid: 0,
    spread_time: 0,
    user_type: "h5",
    is_promoter: 1,
    pay_count: 0,
    spread_count: 0,
    addres: "北京",
    adminid: 0,
    login_type: "",
    record_phone: "0",
    is_money_level: 0,
    is_ever_level: 0,
    overdue_time: 0,
    uniqid: "",
    country: null,
    province: null,
    city: null,
    sex: "保密",
    unionid: null,
    openid: null,
    w_user_type: null,
    groupid: null,
    tagid_list: null,
    subscribe: null,
    subscribe_time: null,
    vip_name: false,
    labels: "A类客户,意向客户",
    isMember: 0,
  },
  {
    uid: 2,
    real_name: "lily",
    card_id: "140621199803194320",
    mark: "test",
    partner_id: 0,
    group_id: "小客户",
    nickname: "uid2",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "18552956666",
    add_time: 1619000990,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "3.00",
    sign_num: 0,
    status: "正常",
    level: 0,
    spread_uid: 0,
    spread_time: 0,
    user_type: "h5",
    is_promoter: 1,
    pay_count: 0,
    spread_count: 0,
    addres: "上海",
    adminid: 0,
    login_type: "",
    record_phone: "0",
    is_money_level: 0,
    is_ever_level: 0,
    overdue_time: 0,
    uniqid: "",
    country: null,
    province: null,
    city: null,
    sex: "女",
    unionid: null,
    openid: null,
    w_user_type: null,
    groupid: null,
    tagid_list: null,
    subscribe: null,
    subscribe_time: null,
    vip_name: false,
    labels: "B类客户,意向客户",
    isMember: 0,
  },
  {
    uid: 3,
    real_name: "mark",
    card_id: "140621199803194320",
    mark: "3",
    partner_id: 0,
    group_id: "小客户",
    nickname: "uid3",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "18552956666",
    add_time: 1619000990,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "3.00",
    sign_num: 0,
    status: "正常",
    level: 0,
    spread_uid: 0,
    spread_time: 0,
    user_type: "h5",
    is_promoter: 1,
    pay_count: 0,
    spread_count: 0,
    addres: "上海",
    adminid: 0,
    login_type: "",
    record_phone: "0",
    is_money_level: 0,
    is_ever_level: 0,
    overdue_time: 0,
    uniqid: "",
    country: null,
    province: null,
    city: null,
    sex: "女",
    unionid: null,
    openid: null,
    w_user_type: null,
    groupid: null,
    tagid_list: null,
    subscribe: null,
    subscribe_time: null,
    vip_name: false,
    labels: "B类客户,意向客户",
    isMember: 0,
  },
  {
    uid: 4,
    real_name: "gun",
    card_id: "621621199803194320",
    mark: "4",
    partner_id: 0,
    group_id: "小客户",
    nickname: "uid4",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "18552956666",
    add_time: 1619000990,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "3.00",
    sign_num: 0,
    status: "正常",
    level: 0,
    spread_uid: 0,
    spread_time: 0,
    user_type: "routine",
    is_promoter: 1,
    pay_count: 0,
    spread_count: 0,
    addres: "上海",
    adminid: 0,
    login_type: "",
    record_phone: "0",
    is_money_level: 0,
    is_ever_level: 0,
    overdue_time: 0,
    uniqid: "",
    country: null,
    province: null,
    city: null,
    sex: "女",
    unionid: null,
    openid: null,
    w_user_type: null,
    groupid: null,
    tagid_list: null,
    subscribe: null,
    subscribe_time: null,
    vip_name: false,
    labels: "B类客户,意向客户",
    isMember: 0,
  },
];
let resData: any[] = [];

export const handlers = [
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

  // 用户管理--列表
  rest.get("/user/user", (req, res, ctx) => {
    interface Search {
      city?: string;
      country?: string;
      field_key?: string;
      group_id?: string | number;
      isMember?: string;
      label_id?: string | number;
      limit?: string | number;
      nickname?: string | number;
      page?: string | number;
      province?: string;
      sex?: string;
      user_time_type?: string;
      user_type?: string;
    }

    // 用于处理params转成对象
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

    const searchParams: Search = getObj(req.url.search);

    // 根据搜索条件处理数据
    // 当请求的user_type为空时即返回全部的数据
    if (searchParams.user_type == "") {
      if (
        searchParams.field_key == "" ||
        (searchParams.field_key !== "" && searchParams.nickname == "")
      ) {
        resData = allData;
      } else if (
        searchParams.field_key == "uid" ||
        searchParams.field_key == ""
      ) {
        // console.log("uid");
        resData = allData.filter((item) => {
          return item.uid == searchParams.nickname;
        });
      } else if (
        searchParams.field_key == "phone" ||
        searchParams.field_key == ""
      ) {
        console.log("phone");
        resData = allData.filter((item) => {
          return item.phone == searchParams.nickname;
        });
      } else if (
        searchParams.field_key == "nickname" ||
        searchParams.field_key == ""
      ) {
        console.log("nickname");
        resData = allData.filter((item) => {
          return item.nickname == searchParams.nickname;
        });
      }
    } else if (
      searchParams.user_type == "wechat" ||
      searchParams.user_type == "routine" ||
      searchParams.user_type == "h5"
    ) {
      // 当field_key和nickname均为空或者field_key有值而nickname为空时返回查询到的符合wechat的所有数据
      if (
        searchParams.field_key == "" ||
        (searchParams.field_key !== "" && searchParams.nickname == "")
      ) {
        resData = allData.filter((item) => {
          return item.user_type == searchParams.user_type;
        });
      } else if (
        searchParams.field_key == "uid" ||
        searchParams.field_key == ""
      ) {
        resData = allData.filter((item) => {
          return (
            item.user_type == searchParams.user_type &&
            item.uid == searchParams.nickname
          );
        });
      } else if (
        searchParams.field_key == "phone" ||
        searchParams.field_key == ""
      ) {
        resData = allData.filter((item) => {
          return (
            item.user_type == searchParams.user_type &&
            item.phone == searchParams.nickname
          );
        });
      } else if (
        searchParams.field_key == "nickname" ||
        searchParams.field_key == ""
      ) {
        resData = allData.filter((item) => {
          return (
            item.user_type == searchParams.user_type &&
            item.nickname == searchParams.nickname
          );
        });
      }
    }

    // 返回数据
    return res(
      // Respond with a 200 status code
      ctx.json({
        count: resData.length,
        list: resData,
      })
    );
  }),

  // 修改用户数据
  rest.post("/user/changeUserData", (req, res, ctx) => {
    console.log("修改了数据", req.body);
    const { uid } = req.body;
    console.log(uid);

    allData = allData.map((item) => {
      if (item.uid == uid) {
        console.log(item);
        Object.assign(item, req.body);
      }
      return item;
    });

    // 返回数据
    return res(
      // Respond with a 200 status code
      ctx.json({
        count: allData.length,
        list: allData,
      })
    );
  }),
];

console.log(allData);
