<template>
  <div>
    订单状态：
    <el-radio-group v-model="status">
      <el-radio-button label="全部"></el-radio-button>
      <el-radio-button label="未支付"></el-radio-button>
      <el-radio-button label="未发货"></el-radio-button>
      <el-radio-button label="待收货"></el-radio-button>
      <el-radio-button label="待评价"></el-radio-button>
      <el-radio-button label="交易完成"></el-radio-button>
      <el-radio-button label="待核销"></el-radio-button>
      <el-radio-button label="退款中"></el-radio-button>
      <el-radio-button label="已退款"></el-radio-button>
      <el-radio-button label="已删除"></el-radio-button>
    </el-radio-group>
  </div>
</template>

<script lang="ts">
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      status: "全部",
    });
    return { ...toRefs(state) };
  },
};
</script>

<style scoped></style>
