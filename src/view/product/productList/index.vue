<template>
  <div class="article-manager">
    <el-tabs v-model="activeName" @tab-click="changeTab">
      <el-tab-pane
        v-for="item in productNav"
        :key="item.type"
        :label="`${item.name}(${item.count})`"
        :name="item.type"
      >
        <Table
          :type="item.type"
          :table-data="tableData"
          @changeShow="onChangeShow"
          @onDismount="onProductShow"
        ></Table>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from "vue";
import Table from "../component/table.vue";
import {
  productList,
  getProductTab,
  PostgoodsIsShow,
  productUnshowApi,
} from "@/api/product";

export default {
  components: { Table },
  setup() {
    const activeName = ref(1);
    const productNav = ref([]); //商品分类tab
    const tableData = ref([]); //商品表格数据

    //点击商品头部tab更新表格数据
    const changeTab = function (tab: { name: string }) {
      productList({ type: tab.name }).then((res) => {
        tableData.value = res.data.list;
      });
    };

    // 编辑商品下架
    const onChangeShow = function (id, show) {
      PostgoodsIsShow({ id, show }).then((res) => {
        tableData.value = res.data.list;
      });
    };

    //批量下架
    const onProductShow = function (ids) {
      let data = ids;
      productUnshowApi({ ids: data }).then((res) => {
        console.log(res, "下架的商品");
      });
    };

    onMounted(() => {
      //初始化商品头部tab
      getProductTab({}).then((res) => {
        if (res.status === 200) {
          productNav.value = res.data.list;
        }
      });
      //初始化商品头部tab
      productList({ type: activeName.value }).then((res) => {
        tableData.value = res.data.list;
      });
    });
    return {
      activeName,
      productNav,
      tableData,
      changeTab,
      onChangeShow,
      onProductShow,
    };
  },
};
</script>

<style lang="stylus" scoped></style>
