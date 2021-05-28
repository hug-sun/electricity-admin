<template>
  <div style="width: 100%">
    <el-dialog v-model:visible="modals" show-close title="用户详情" width="80%">
      <div class="acea-row">
        <div class="avatar mr15"><img :src="psInfo.avatar" /></div>
        <div class="dashboard-workplace-header-tip">
          <p
            class="dashboard-workplace-header-tip-title"
            v-text="psInfo.nickname || '-'"
          ></p>
          <div class="dashboard-workplace-header-tip-desc">
            <span
              v-for="(item, index) in detailsData"
              :key="index"
              class="dashboard-workplace-header-tip-desc-sp"
              >{{ item.title + "：" + item.value }}</span
            >
          </div>
        </div>
      </div>
      <el-row type="flex" justify="space-between" class="mt25">
        <el-col :span="5" class="user_menu">
          <el-menu default-active="order" @select="changeType">
            <el-menu-item
              v-for="(item, index) in list"
              :key="index"
              :index="item.val"
              >{{ item.label }}</el-menu-item
            >
          </el-menu>
        </el-col>
        <el-col :span="20">
          <plus-table
            :data="userLists"
            style="width: 100%"
            empty-text="暂无数据"
          >
            <plus-table-column
              v-for="item in columns"
              :key="item.key"
              :prop="item.key"
              :label="item.title"
            ></plus-table-column>
          </plus-table>
          <div class="acea-row row-right page">
            <el-pagination
              :current-page="userForm.page"
              :page-size="userForm.limit"
              layout="total, prev, pager, next, jumper"
              :total="total"
              small
              @size-change="changeType"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive } from "vue";
import { detailsApi, infoApi } from "@/api/user";
import { ElTable, ElTableColumn } from "element-plus";
export default {
  components: {
    "plus-table": ElTable,
    "plus-table-column": ElTableColumn,
  },
  setup() {
    let modals = ref(false);
    let detailsData = ref([]);
    let psInfo = reactive({});
    let userLists = ref([]);
    let columns = ref([]);
    let userId = ref(0);
    let total = ref(0);
    const list = ref([
      { val: "order", label: "消费记录" },
      { val: "integral", label: "积分明细" },
      { val: "coupon", label: "持有优惠券" },
      { val: "balance_change", label: "余额变动" },
      { val: "spread", label: "好友关系" },
    ]);

    let userForm = reactive({
      type: "order",
      page: 1, // 当前页
      limit: 20, // 每页显示条数
    });

    // 会员详情
    const getDetails = (uid) => {
      userId.value = uid;
      detailsApi(uid).then(({ data }) => {
        if (data.status == 200) {
          detailsData.value = data.data.headerList;
          Object.assign(psInfo, data.data.ps_info);
          changeType(userForm.type);
        }
      });
    };

    // 切换tab
    const changeType = (name) => {
      userForm.type = name;
      if (userForm.type === "") {
        userForm.type = "order";
      }
      let newdata = {
        id: userId.value,
        datas: userForm,
      };
      infoApi(newdata).then(({ data }) => {
        if (data.status == 200) {
          userLists.value = data.data.list;
          total.value = data.data.count;
          switch (userForm.type) {
            case "order":
              columns.value = [
                {
                  title: "订单ID",
                  key: "order_id",
                  minWidth: 160,
                },
                {
                  title: "收货人",
                  key: "real_name",
                  minWidth: 100,
                },
                {
                  title: "商品数量",
                  key: "total_num",
                  minWidth: 90,
                },
                {
                  title: "商品总价",
                  key: "total_price",
                  minWidth: 110,
                },
                {
                  title: "实付金额",
                  key: "pay_price",
                  minWidth: 120,
                },
                {
                  title: "交易完成时间",
                  key: "pay_time",
                  minWidth: 120,
                },
              ];
              break;
            case "integral":
              columns.value = [
                {
                  title: "来源/用途",
                  key: "title",
                  minWidth: 120,
                },
                {
                  title: "积分变化",
                  key: "number",
                  minWidth: 120,
                },
                {
                  title: "变化前积分",
                  key: "balance",
                  minWidth: 120,
                },
                {
                  title: "日期",
                  key: "add_time",
                  minWidth: 120,
                },
                {
                  title: "备注",
                  key: "mark",
                  minWidth: 120,
                },
              ];
              break;
            case "coupon":
              columns.value = [
                {
                  title: "优惠券名称",
                  key: "coupon_title",
                  minWidth: 120,
                },
                {
                  title: "面值",
                  key: "coupon_price",
                  minWidth: 120,
                },
                {
                  title: "有效期(天)",
                  key: "coupon_time",
                  minWidth: 120,
                },
                {
                  title: "兑换时间",
                  key: "_add_time",
                  minWidth: 120,
                },
              ];
              break;
            case "balance_change":
              columns.value = [
                {
                  title: "动作",
                  key: "title",
                  minWidth: 120,
                },
                {
                  title: "变动金额",
                  key: "number",
                  minWidth: 120,
                },
                {
                  title: "变动前",
                  key: "balance",
                  minWidth: 120,
                },
                {
                  title: "创建时间",
                  key: "add_time",
                  minWidth: 120,
                },
                {
                  title: "备注",
                  key: "mark",
                  minWidth: 120,
                },
              ];
              break;
            default:
              columns.value = [
                {
                  title: "ID",
                  key: "uid",
                  minWidth: 120,
                },
                {
                  title: "昵称",
                  key: "nickname",
                  minWidth: 120,
                },
                {
                  title: "等级",
                  key: "type",
                  minWidth: 120,
                },
                {
                  title: "加入时间",
                  key: "add_time",
                  minWidth: 120,
                },
              ];
          }
        }
      });
    };

    return {
      modals,
      detailsData,
      getDetails,
      psInfo,
      list,
      total,
      changeType,
      userForm,
      userLists,
      columns,
    };
  },
};
</script>

<style lang="less" scoped>
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
}
.dashboard-workplace {
  &-header {
    &-avatar {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      margin-right: 16px;
      font-weight: 600;
    }

    &-tip {
      width: 82%;
      display: inline-block;
      vertical-align: middle;

      &-title {
        font-size: 13px;
        color: #000000;
        margin-bottom: 12px;
      }

      &-desc {
        &-sp {
          width: 33.33%;
          color: #17233d;
          font-size: 13px;
          display: inline-block;
        }
      }
    }

    &-extra {
      .ivu-col {
        p {
          text-align: right;
        }

        p:first-child {
          span:first-child {
            margin-right: 4px;
          }

          span:last-child {
            color: #808695;
          }
        }

        p:last-child {
          font-size: 22px;
        }
      }
    }
  }
}

.el-menu-item.is-active {
  background: #ecf5ff;
  border-right: 2px solid #2d8cf0;
}
</style>
