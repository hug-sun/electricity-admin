<template>
  <div class="search-input-box">
    搜索：
    <el-input
      v-model="searchValue"
      placeholder="请输入内容"
      class="input-with-select"
    >
      <template #prepend>
        <el-select v-model="searchKeyword" style="width: 140px" size="small">
          <el-option value="all" label="全部"></el-option>
          <el-option value="orderID" label="订单号"></el-option>
          <el-option value="uid" label="UID"></el-option>
          <el-option value="user_name" label="用户姓名"></el-option>
          <el-option value="phone" label="用户电话"></el-option>
          <el-option value="product_name" label="商品名称(模糊)"></el-option>
        </el-select>
      </template>
      <template #append>
        <el-button icon="el-icon-search" @click="searchHandle"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted } from "vue";
export default {
  setup() {
    const data = reactive({
      searchValue: "",
      searchKeyword: "",
    });
    const searchHandle = () => {
      console.log(data.searchValue, data.searchKeyword);
    };
    onMounted(() => {
      data.searchKeyword = "all";
    });
    return {
      ...toRefs(data),
      searchHandle,
    };
  },
};
</script>

<style scoped>
.el-select .el-input {
  width: 130px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
.search-input-box {
  display: flex;
  line-height: 40px;
  margin-top: 15px;
}
.search-input-box .el-input {
  max-width: 400px;
}
</style>
