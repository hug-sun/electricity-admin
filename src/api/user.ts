import axios from "axios";

/**
 * @description 用户管理--列表
 * @param {Object} param data {Object} 传值参数
 */
axios.defaults.baseURL = "/";

export async function userList(data: any) {
  console.log(data);
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
