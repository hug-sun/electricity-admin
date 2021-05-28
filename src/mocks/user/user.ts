// 测试数据
import { rest } from "msw";

let allData = [
  {
    uid: 6,
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
    uid: 5,
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
    uid: 4,
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
    uid: 3,
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
  {
    uid: 2,
    real_name: "haha",
    card_id: "621621199803194320",
    mark: "4",
    partner_id: 0,
    group_id: "小客户",
    nickname: "uid5",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "18552956666",
    add_time: 1619000990,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "6.00",
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
    sex: "男",
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
    uid: 1,
    real_name: "haha",
    card_id: "621621199803194320",
    mark: "6",
    partner_id: 0,
    group_id: "小客户",
    nickname: "uid6",
    avatar:
      "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
    phone: "18552956666",
    add_time: 1619000990,
    last_time: 0,
    now_money: "0.00",
    brokerage_price: "0.00",
    integral: 0,
    exp: "6.00",
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
    sex: "男",
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
interface bodyValue {
  uid: string | number;
}

export const users = [
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

    // if - 添加用户，else - 查询数据
    if (!searchParams.page) {
      allData.unshift(Object.assign(searchParams, { uid: ++allData.length }));
      return res(
        // Respond with a 200 status code
        ctx.json({ status: 200, msg: "添加成功" })
      );
    } else {
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
          resData = allData.filter((item) => {
            return item.uid == searchParams.nickname;
          });
        } else if (
          searchParams.field_key == "phone" ||
          searchParams.field_key == ""
        ) {
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
    }
  }),

  // 修改用户数据
  rest.post<bodyValue>("/user/changeUserData", (req, res, ctx) => {
    const { uid } = req.body;

    allData = allData.map((item) => {
      if (item.uid == uid) {
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

  // 添加用户
  rest.get("/user/user/create", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        status: 200,
        msg: "ok",
        data: {
          rules: [
            {
              type: "input",
              field: "real_name",
              value: "",
              title: "真实姓名",
              props: { type: "text", placeholder: "请输入真实姓名" },
            },
            {
              type: "input",
              field: "phone",
              value: "",
              title: "手机号码",
              props: { type: "text", placeholder: "请输入手机号码" },
              validate: [
                {
                  message: "请输入手机号码",
                  required: true,
                  type: "string",
                  trigger: "change",
                },
              ],
            },
            {
              type: "input",
              field: "pwd",
              value: "",
              title: "登录密码",
              props: { type: "password", placeholder: "请输入登录密码" },
            },
            {
              type: "input",
              field: "true_pwd",
              value: "",
              title: "确认密码",
              props: { type: "password", placeholder: "请再次确认密码" },
            },
            {
              type: "input",
              field: "card_id",
              value: "",
              title: "身份证号",
              props: { type: "text", placeholder: "请输入身份证号" },
            },
            {
              type: "input",
              field: "addres",
              value: "",
              title: "用户地址",
              props: { type: "text", placeholder: "请输入用户地址" },
            },
            {
              type: "input",
              field: "mark",
              value: "",
              title: "用户备注",
              props: { type: "textarea", placeholder: "请输入用户备注" },
            },
            {
              type: "select",
              field: "group_id",
              value: "",
              title: "用户分组",
              props: {
                multiple: false,
                placeholder: "请选择用户分组",
                filterable: true,
              },
              options: [
                { value: 1, label: "大客户" },
                { value: 2, label: "中客户" },
                { value: 4, label: "小客户" },
                { value: 5, label: "未知" },
              ],
            },
            {
              type: "select",
              field: "label_id",
              value: "",
              title: "用户标签",
              props: {
                multiple: true,
                placeholder: "请选择用户标签",
                filterable: true,
              },
              options: [
                { value: 1, label: "A类客户" },
                { value: 2, label: "B类客户" },
                { value: 3, label: "C类客户" },
                { value: 4, label: "意向客户" },
                { value: 5, label: "已成交客户" },
                { value: 6, label: "退款客户" },
                { value: 7, label: "百度" },
                { value: 8, label: "淘宝" },
                { value: 9, label: "朋友介绍" },
                { value: 10, label: "推广客户" },
              ],
            },
            {
              type: "radio",
              field: "status",
              value: 1,
              title: "状态",
              props: {},
              options: [
                { value: 1, label: "开启" },
                { value: 0, label: "锁定" },
              ],
            },
          ],
          title: "添加用户",
          action: "/user/user",
          method: "POST",
          info: "",
          status: true,
        },
      })
    );
  }),

  // 用户详情信息
  rest.get("/user/user/6", (req, res, ctx) => {
    return res(
      ctx.json({
        status: 200,
        msg: "ok",
        data: {
          uid: 20,
          userinfo: [
            { name: "默认收货地址", value: "" },
            { name: "手机号码", value: "17603021918" },
            { name: "姓名", value: "" },
            { name: "微信昵称", value: "176****1918" },
            {
              name: "头像",
              value:
                "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
            },
            { name: "邮箱", value: "" },
            { name: "生日", value: "" },
            { name: "积分", value: 0 },
            { name: "账户余额", value: "0.00" },
          ],
          headerList: [
            { title: "余额", value: "0.00", key: "元" },
            { title: "总计订单", value: 0, key: "笔" },
            { title: "总消费金额", value: 0, key: "元" },
            { title: "积分", value: 0, key: "" },
            { title: "本月订单", value: 0, key: "笔" },
            { title: "本月消费金额", value: 0, key: "元" },
          ],
          count: [0, 0, 0],
          ps_info: {
            uid: 20,
            real_name: "yc",
            birthday: 1621612800,
            card_id: "411381200009204236",
            mark: "",
            partner_id: 0,
            group_id: 0,
            nickname: "176****1918",
            avatar:
              "http://kaifa.crmeb.net/uploads/attach/2019/08/20190807/723adbdd4e49a0f9394dfc700ab5dba3.png",
            phone: "17603021918",
            add_time: 1621665923,
            last_time: 0,
            now_money: "0.00",
            brokerage_price: "0.00",
            integral: 0,
            exp: "0.00",
            sign_num: 0,
            status: 1,
            level: 0,
            spread_uid: 0,
            spread_time: 0,
            user_type: "h5",
            is_promoter: 1,
            pay_count: 0,
            spread_count: 0,
            addres: "",
            adminid: 0,
            login_type: "",
            record_phone: "0",
            is_money_level: 0,
            is_ever_level: 0,
            overdue_time: 0,
            uniqid: "",
          },
        },
      })
    );
  }),

  // 用户详情信息 - 表格数据
  rest.get("/user/one_info/6", (req, res, ctx) => {
    return res(
      ctx.json({ status: 200, msg: "ok", data: { list: [], count: 0 } })
    );
  }),
];
