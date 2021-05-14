<template>
  <el-table
    :data="tableData"
    style="width: 100%"
    max-height="250"
    @cell-click="cellClick"
  >
    <el-table-column type="expand">
      <template #default="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="商品总价">
            <span>{{ props.row.totalPrice }}</span>
          </el-form-item>
          <el-form-item label="下单时间">
            <span>{{ props.row.time }}</span>
          </el-form-item>
          <el-form-item label="用户备注">
            <span>{{
              props.row.userNotes === "" ? "无" : props.row.userNotes
            }}</span>
          </el-form-item>
          <el-form-item label="商家备注">
            <span>{{
              props.row.businessNotes === "" ? "无" : props.row.businessNotes
            }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="orderID.number" label="订单号" width="200">
      <template #default="scope">
        <div>
          {{ scope.row.orderID }}
        </div>
        <div class="red">
          {{ scope.row.remarks }}
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="OrderType" label="订单类型" width="120">
    </el-table-column>
    <el-table-column prop="UserInfo" label="用户信息" width="120">
    </el-table-column>
    <el-table-column prop="productInfo.describe" label="商品信息" width="500">
      <template #default="scope">
        <div class="tabBox">
          <img :src="scope.row.imageSrc" alt="" class="img" />
          <div class="tab_tit">
            {{ scope.row.describe }}
          </div>
          <div>
            {{ scope.row.price }}
          </div>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="payment" label="实际支付" width="120">
    </el-table-column>
    <el-table-column prop="paymentTime" label="支付时间" width="120">
    </el-table-column>
    <el-table-column prop="paymentStatus" label="支付状态" width="120">
    </el-table-column>
    <el-table-column prop="OrderStatus" label="订单状态" width="120">
    </el-table-column>
    <el-table-column fixed="right" prop="zip" label="操作" width="120">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)"
          >编辑</el-button
        >
        <el-divider direction="vertical"></el-divider>
        <el-dropdown>
          <span class="el-dropdown-link">
            更多<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu>
            <el-dropdown-item>订单详情</el-dropdown-item>
            <el-dropdown-item @click="dialogTableVisible = true"
              >订单记录</el-dropdown-item
            >
            <el-dropdown-item @click="dialogDeleteVisible = true"
              >删除订单</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </template>
    </el-table-column>
  </el-table>
  <el-pagination
    :current-page="currentPage"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="10"
    layout="total, sizes, prev, pager, next, jumper"
    :total="totalLength"
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
  >
  </el-pagination>
  <el-dialog
    v-model:visible="dialogVisible"
    title="修改订单"
    :visible="dialogVisible"
    width="30%"
  >
    <template #default>
      <div>
        <span class="text">订单编号</span>
        <el-input
          v-model="dialogData.orderID"
          placeholder="dialogData.orderID"
          :disabled="true"
          size="small"
          class="disabledInput"
        ></el-input>
      </div>
      <div>
        <span class="text">商品总价</span>
        <el-input-number
          v-model="dialogData.totalPrice"
          controls-position="right"
          :min="0"
          :max="Infinity"
          size="small"
          @change="handleChange"
        ></el-input-number>
      </div>
      <div>
        <span class="text">原始邮费</span>
        <el-input-number
          v-model="dialogData.originalPostage"
          controls-position="right"
          :min="0"
          :max="Infinity"
          size="small"
          @change="handleChange"
        ></el-input-number>
      </div>

      <div>
        <span class="text">实际支付金额</span>
        <el-input-number
          v-model="dialogData.payment"
          controls-position="right"
          :min="0"
          :max="Infinity"
          size="small"
          @change="handleChange"
        ></el-input-number>
      </div>
      <div>
        <span class="text">实际支付邮费</span>
        <el-input-number
          v-model="dialogData.actualPostage"
          controls-position="right"
          :min="0"
          :max="Infinity"
          size="small"
          @change="handleChange"
        ></el-input-number>
      </div>
      <div>
        <span class="text">积分</span>
        <el-input-number
          v-model="dialogData.integral"
          controls-position="right"
          :min="0"
          :max="Infinity"
          size="small"
          @change="handleChange"
        ></el-input-number>
      </div>
    </template>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changeCurrentOrder">确 定</el-button>
      </span>
    </template>
  </el-dialog>
  <el-dialog
    v-model:visible="dialogTableVisible"
    title="订单记录"
    :visible="dialogTableVisible"
  >
    <template #default>
      <el-table :data="gridData">
        <el-table-column
          property="orderID"
          label="订单ID"
          width="150"
        ></el-table-column>
        <el-table-column
          property="operationRecord"
          label="操作记录"
          width="200"
        ></el-table-column>
        <el-table-column
          property="operationTime"
          label="操作时间"
        ></el-table-column>
      </el-table>
    </template>
  </el-dialog>
  <el-dialog
    v-model:visible="dialogDeleteVisible"
    title="删除订单"
    :visible="dialogDeleteVisible"
    width="30%"
  >
    <template #default>
      <span>确定要删除订单吗？删除订单后无法恢复，请谨慎操作！</span>
    </template>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="deleteOrder">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script lang="ts">
import { reactive, toRefs, onMounted, ref } from "vue";
import axios from "axios";
export default {
  setup() {
    const state = reactive({
      tableData: [],
      dialogVisible: false,
      moreSelectVisible: false,
      dialogData: {},
      currentPage: 1,
      dialogTableVisible: false,
      gridData: [],
      dialogDeleteVisible: false,
      deleteOrderID: null,
    });
    let totalLength = ref(0);
    let handleClick = (row: any) => {
      console.log(row);
      let { orderID, totalPrice, payment } = row;

      console.log();
      let dialogData = {
        orderID,
        totalPrice: Number(totalPrice),
        originalPostage: Number((payment - totalPrice).toFixed(0)),
        payment: Number(payment),
        actualPostage: Number((payment - totalPrice).toFixed(0)),
        integral: 0,
      };
      state.dialogData = dialogData;
      state.dialogVisible = true;
    };
    const handleChange = (value: string) => {
      console.log(value);
    };
    const changeCurrentOrder = () => {
      axios.post("/changeOrderData", state.dialogData).then(({ data }) => {
        state.tableData.splice(0, state.tableData.length, ...data);
      });
      state.dialogVisible = false;
    };
    onMounted(() => {
      axios.get("/orderlist").then(({ data }) => {
        state.tableData.push(...data.orderData);
        totalLength.value = data.totalLength;
      });
    });
    const handleSizeChange = (size: string) => {
      console.log(`每页 ${size} 条`);
    };

    const handleCurrentChange = (page: string) => {
      console.log(`当前页: ${page}`);
    };
    const cellClick = (row) => {
      state.deleteOrderID = row.orderID;
    };
    const deleteOrder = () => {
      console.log(state.deleteOrderID, "id");
      axios.post("/deleteOrder", state.deleteOrderID).then(({ data }) => {
        console.log(data);
        state.tableData.splice(0, state.tableData.length, ...data.orderData);
        totalLength.value = data.totalLength;
      });
      state.dialogDeleteVisible = false;
    };
    return {
      ...toRefs(state),
      handleClick,
      handleChange,
      changeCurrentOrder,
      handleSizeChange,
      handleCurrentChange,
      totalLength,
      deleteOrder,
      cellClick,
    };
  },
};
</script>

<style scoped>
.el-input.is-disabled {
  width: 200px;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.text {
  display: inline-block;
  width: 100px;
  line-height: 40px;
}
.red {
  color: red;
  text-align: center;
}
.img {
  width: 36px;
  height: 36px;
}
.tabBox {
  display: flex;
  justify-content: space-around;
}
.tab_tit {
  width: 60%;
}
.el-dropdown-link,
.el-icon-arrow-down {
  color: #2d8cf0;
  font-size: 12px;
  cursor: pointer;
}
</style>
