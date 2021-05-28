import axios from "axios";

/**
 * @description 用户管理--列表
 * @param {Object} param data {Object} 传值参数
 */
axios.defaults.baseURL = "/";

export async function userList(data: any) {
  const rs = await axios.get("/user/user", {
    params: { ...data },
  });
  return rs;
}

/**
 * @description 编辑表单数据
 * @param {Number} param id {Number} 会员id
 */
export async function editUserData(data: any) {
  let rs;
  await axios
    .post("/user/changeUserData", {
      ...data,
    })
    .then(({ data }) => {
      rs = data;
    });

  return rs;
}

/**
 * 添加用户
 */
export async function getUserSaveForm() {
  const rs = await axios.get("/user/user/create");
  return rs;
}

/**
 * @description 会员管理-详情
 * @param {Number} param id {Number} 用户id
 */
export async function detailsApi(id: number) {
  const rs = await axios.get(`user/user/${id}`);
  return rs;
}

/**
 * @description 会员管理详情中tab选项
 * @param {Number} param id {Number} 用户id
 */
export async function infoApi(data: any) {
  const rs = await axios.get(`user/one_info/${data.id}`, {
    params: { ...data.datas },
  });
  return rs;
}
