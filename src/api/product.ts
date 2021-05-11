import axios, { AxiosResponse } from "axios";

/**
 * @description 商品管理--列表
 * @param {Object} param data {Object} 传值参数
 */
axios.defaults.baseURL = "/";

//获取商品管理 > 商品 > 表格数据
export async function productList(
  data: Record<string, unknown>
): Promise<AxiosResponse<any>> {
  const res = await axios.get("/adminapi/product/product", {
    params: { ...data },
  });
  return res;
}

//获取商品管理 > 出售中的商品>商品分类选项数据
export async function getCategoryTree(
  data: Record<string, unknown>
): Promise<AxiosResponse<any>> {
  const res = await axios.get("/adminapi/product/category/tree/1", {
    params: { ...data },
  });
  console.log(data, "getCategoryTree+++++");
  return res;
}

// 获取商品管理 > 出售中的商品 >tab列表以及数量
export async function getProductTab(
  data: Record<string, unknown>
): Promise<AxiosResponse<any>> {
  const res = await axios.get("/adminapi/product/product/type_header", {
    params: { ...data },
  });
  // console.log(data,"getProductTab+++++")
  return res;
}

// 获取商品管理 > 出售中的商品 >商品编辑上下架
export async function PostgoodsIsShow(
  data: Record<string, unknown>
): Promise<AxiosResponse<any>> {
  const res = await axios.put(
    `/product/product/set_show/${data.id}/${data.show}`
  );
  return res;
}

// 获取商品管理 > 出售中的商品 >批量下架
export async function productUnshowApi(
  data: Record<string, unknown>
): Promise<AxiosResponse<any>> {
  const res = await axios.put("/product/product/product_unshow", data);
  return res;
}
