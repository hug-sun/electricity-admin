<template>
  <div>
    <div class="i-layout-page-header">
      <div class="i-layout-page-header">
        <span class="ivu-page-header-title">用户管理</span>
        <div>
          <el-tabs @tab-click="onClickTab">
            <el-tab-pane
              v-for="(item, index) in headeNum"
              :key="index"
              :label="item.name"
              :name="item.type"
            />
          </el-tabs>
        </div>
      </div>
    </div>
    <el-card shadow="never" class="ivu-mt listbox">
      <el-form :model="userFrom">
        <el-row :gutter="10">
          <el-col :span="18">
            <el-col>
              <el-form-item label="用户搜索：" placeholder="请选择">
                <el-select
                  v-model="field_key"
                  style="width: 140px"
                  size="small"
                >
                  <el-option value="all" label="全部"></el-option>
                  <el-option value="uid" label="UID"></el-option>
                  <el-option value="phone" label="手机号"></el-option>
                  <el-option value="nickname" label="用户昵称"></el-option>
                </el-select>
                <el-input
                  v-model="userFrom.nickname"
                  placeholder="请输入"
                  clearable
                  style="width: 90px"
                  size="small"
                >
                  >
                </el-input>
              </el-form-item>
            </el-col>
          </el-col>
          <template v-if="collapse">
            <!-- 用户分组与用户标签 -->
            <el-col :span="18">
              <el-col :span="9">
                <el-form-item label="用户分组：">
                  <el-select
                    v-model="group_id"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option value="全部">全部</el-option>
                    <el-option
                      v-for="(item, index) in groupList"
                      :key="index"
                      :value="item.group_name"
                      >{{ item.group_name }}</el-option
                    >
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item label="用户标签：">
                  <el-select
                    v-model="label_id"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option value="all" label="全部">全部</el-option>
                    <el-option
                      v-for="(item, index) in labelLists"
                      :key="index"
                      :value="item.label_name"
                      :label="item.label_name"
                    ></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>

            <!-- 付费会员与国家 -->
            <el-col :span="24">
              <el-col :span="7">
                <el-form-item label="付费会员：">
                  <el-select
                    v-model="userFrom.isMember"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option :value="1" label="是"></el-option>
                    <el-option :value="0" label="否"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="7">
                <el-form-item label="国家：">
                  <el-select
                    v-model="userFrom.country"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option value="domestic" label="中国">中国</el-option>
                    <el-option value="abroad" label="外国">外国</el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col v-if="userFrom.country === 'domestic'" :span="9">
                <el-form-item label="省份：">
                  <el-cascader
                    v-model="address"
                    :options="addressData"
                    size="small"
                  ></el-cascader>
                </el-form-item>
              </el-col>
            </el-col>

            <!-- 性别 -->
            <el-col :span="18">
              <el-col>
                <el-form-item label="性别：">
                  <el-radio-group
                    v-model="userFrom.sex"
                    type="button"
                    size="small"
                  >
                    <el-radio-button label="">
                      <span>全部</span>
                    </el-radio-button>
                    <el-radio-button label="1">
                      <span>男</span>
                    </el-radio-button>
                    <el-radio-button label="2">
                      <span>女</span>
                    </el-radio-button>
                    <el-radio-button label="0">
                      <span>保密</span>
                    </el-radio-button>
                  </el-radio-group>
                </el-form-item>
              </el-col>
            </el-col>

            <!-- 访问情况与下单次数 -->
            <el-col :span="18">
              <el-col :span="9">
                <el-form-item label="访问情况：">
                  <el-select
                    v-model="user_time_type"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option value="all" label="全部"></el-option>
                    <el-option value="visitno" label="时间段未访问"></el-option>
                    <el-option value="visit" label="时间段访问过"></el-option>
                    <el-option value="add_time" label="首次访问"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="9">
                <el-form-item label="下单次数：">
                  <el-select
                    v-model="label_id"
                    placeholder="请选择"
                    clearable
                    style="width: 140px"
                    size="small"
                  >
                    <el-option value="all" label="全部"></el-option>
                    <el-option value="-1" label="0次"></el-option>
                    <el-option value="0" label="1次以上"></el-option>
                    <el-option value="1" label="2次以上"></el-option>
                    <el-option value="2" label="3次以上"></el-option>
                    <el-option value="3" label="4次以上"></el-option>
                    <el-option value="4" label="5次以上"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
            </el-col>
          </template>

          <el-col :span="6" class="ivu-text-right userFrom">
            <el-form-item>
              <el-button
                type="primary"
                class="mr15"
                size="small"
                icon="el-icon-search"
                @click="userSearchs"
                >搜索</el-button
              >
              <el-button class="ResetSearch" size="small" @click="reset"
                >重置</el-button
              >
              <a style="font-size: 12px" @click="collapse = !collapse">
                <template v-if="!collapse">
                  展开<i class="el-icon-arrow-down"></i>
                </template>
                <template v-else>
                  收起<i class="el-icon-arrow-up"></i>
                </template>
              </a>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>

      <!-- 分割线 -->
      <el-divider></el-divider>

      <!-- 操作用户数据 -->
      <el-row class="mt20">
        <el-col :span="24">
          <el-button type="primary" class="mr20" size="small" @click="save"
            >添加用户</el-button
          >
          <el-button class="mr20" size="small" @click="onSend"
            >发送优惠券</el-button
          >
          <el-button class="mr20" size="small" @click="setGroup"
            >批量设置分组</el-button
          >
          <el-button class="mr20" size="small" @click="setLabel"
            >批量设置标签</el-button
          >
        </el-col>
        <el-col v-if="selectionList.length" :span="24" class="userAlert">
          <el-alert show-icon :closable="false">
            已选择{{ selectionList.length }}项</el-alert
          >
        </el-col>
      </el-row>

      <!-- 用户数据列表 -->
      <el-table
        :data="
          userLists.slice(
            (userFrom.page - 1) * userFrom.limit,
            userFrom.page * userFrom.limit
          )
        "
        style="width: 100%"
        empty-text="暂无数据"
        :highlight-current-row="true"
        @selection-change="onSelectTab"
      >
        <el-table-column type="expand">
          <template #default="scope">
            <el-form label-position="left" inline class="demo-table-expand">
              <el-form-item label="首次访问：">
                <span>{{ timestampToTime(scope.row.add_time) }}</span>
              </el-form-item>
              <el-form-item label="近次访问：">
                <span></span>
              </el-form-item>
              <el-form-item label="身份证号：">
                <span>{{ scope.row.card_id }}</span>
              </el-form-item>
              <el-form-item label="真实姓名：">
                <span>{{ scope.row.real_name }}</span>
              </el-form-item>
              <el-form-item label="标签：">
                <span>{{ scope.row.labels }}</span>
              </el-form-item>
              <el-form-item label="地址：">
                <span>{{ scope.row.addres }}</span>
              </el-form-item>
              <el-form-item label="备注：">
                <span>{{ scope.row.mark }}</span>
              </el-form-item>
            </el-form>
          </template>
        </el-table-column>
        <el-table-column type="selection"></el-table-column>
        <el-table-column label="ID" prop="uid" align="center"></el-table-column>
        <el-table-column label="头像" align="center">
          <template #default="scope">
            <img :src="scope.row.avatar" alt="" class="img" />
          </template>
        </el-table-column>
        <el-table-column
          label="昵称"
          prop="nickname"
          align="center"
          min-height="280"
          :show-overflow-tooltip="true"
        ></el-table-column>
        <el-table-column label="分组" prop="group_id" align="center">
        </el-table-column>
        <el-table-column label="手机号" prop="phone" align="center">
        </el-table-column>
        <el-table-column label="用户类型" prop="user_type" align="center">
        </el-table-column>
        <el-table-column label="余额" prop="exp" sortable align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          align="center"
          width="120px"
        >
          <template #default="scope">
            <el-button type="text" size="small" @click="edit(scope.row)"
              >编辑</el-button
            >

            <el-divider direction="vertical"></el-divider>
            <el-dropdown @command="handleCommand(scope.row, $event)">
              <span class="el-dropdown-link">
                更多<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu style="font-size: 12px">
                <el-dropdown-item command="1">账户详情</el-dropdown-item>
                <el-dropdown-item command="2">积分余额</el-dropdown-item>
                <el-dropdown-item command="5">设置分组</el-dropdown-item>
                <el-dropdown-item command="6">设置标签</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </template>
        </el-table-column>
      </el-table>

      <!-- 分页 -->
      <div class="acea-row row-right page">
        <el-pagination
          v-model:current-page="userFrom.page"
          :page-size="userFrom.limit"
          layout="total, prev, pager, next, jumper"
          :total="userLists.length"
          :small="true"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </el-card>

    <!-- 修改用户的对话框 -->
    <edit-user-model
      v-if="editDialog"
      v-model:editDialog="editDialog"
      :change-data="changeData"
      :form-label-width="formLabelWidth"
    ></edit-user-model>

    <!-- 添加用户 -->
    <add-user-modal
      v-if="addDialog"
      v-model:addDialog="addDialog"
      :add-user-form="addUserForm"
      @add-user="addUser"
    ></add-user-modal>

    <!-- 会员详情-->
    <user-details ref="userDetails"></user-details>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRefs, onMounted } from "vue";
import { Message } from "element3";
import city from "@/utils/city";
import { userList, editUserData, getUserSaveForm } from "@/api/user";
import AddUserModal from "@/components/AddUserModal.vue";
import EditUserModel from "@/components/EditUserModel.vue";
import userDetails from "./handle/userDetails.vue";

interface UserFrom {
  label_id: string;
  user_type: string;
  sex: string;
  country: string;
  isMember: string;
  user_time_type: string;
  nickname: string;
  province: string;
  city: string;
  page: number;
  limit: number;
  group_id: string;
  field_key: string;
}

export default defineComponent({
  components: {
    AddUserModal,
    EditUserModel,
    userDetails,
  },
  setup() {
    const userDetails = ref();
    const radio = ref("2");
    let editUserModal = reactive({
      editDialog: false,
      changeData: {},
      formLabelWidth: "120px",
    });
    let addModalData = reactive({
      addDialog: false,
      addUserForm: [],
      formLabelWidth: "120px",
    });

    onMounted(() => {
      // DOM元素将在初始渲染后分配给ref
      console.log(userDetails.value); // <div>这是根元素</div>
    });

    // 处理分页
    const handleSizeChange = (size: number) => {
      selectionList.value = [];
      userFrom.page = size;
      getList();
    };

    const handleCurrentChange = (page: number) => {
      userFrom.page = page;
    };

    // 级联城市数据
    const addressData = city;

    let userLists = ref([]);

    let collapse = ref(false);
    let group_id = ref("");
    let label_id = ref("");
    let field_key = ref("");
    let user_time_type = ref("");

    let headeNum = ref([
      { type: "", name: "全部" },
      { type: "wechat", name: "微信公众号" },
      { type: "routine", name: "微信小程序" },
      { type: "h5", name: "H5" },
    ]);

    let userFrom = reactive<UserFrom>({
      label_id: "",
      user_type: "",
      sex: "",
      country: "",
      isMember: "",
      user_time_type: "",
      nickname: "",
      province: "",
      city: "",
      page: 1,
      limit: 2,
      group_id: "",
      field_key: "",
    });

    let groupList = ref([]);
    let labelLists = ref([]);
    let selectionList = ref([]);
    let address = ref([]);

    // 获取用户数据
    const getList = () => {
      userFrom.user_type = userFrom.user_type || "";
      userFrom.sex = userFrom.sex || "";
      userFrom.country = userFrom.country || "";
      userFrom.user_time_type =
        user_time_type.value === "all" ? "" : user_time_type.value;
      userFrom.label_id = label_id.value === "all" ? "" : label_id.value;
      userFrom.field_key = field_key.value === "all" ? "" : field_key.value;
      userFrom.group_id = group_id.value === "all" ? "" : group_id.value;

      userList(userFrom).then((res) => {
        let data = res.data;
        userLists.value = data.list;
      });
    };

    // 切换tab
    const onClickTab = (type: any) => {
      userFrom.page = 1;
      userFrom.user_type = type.name;
      // 获取数据
      getList();
    };

    // 全选
    const onSelectTab = (selection: any) => {
      selectionList.value = selection;
    };

    // 重置
    const reset = () => {
      userFrom.user_type = "";
      userFrom.sex = "";
      userFrom.country = "";
      userFrom.user_time_type = "";
      userFrom.nickname = "";
      userFrom.field_key = "";
      userFrom.group_id = "";
      userFrom.label_id = "";
      userFrom.isMember = "";
      userFrom.page = 1;
      userFrom.limit = 2;

      field_key.value = "";
      group_id.value = "";
      label_id.value = "";
      user_time_type.value = "";
      getList();
    };

    // 点击发送优惠券
    const onSend = () => {
      if (selectionList.value.length === 0) {
        Message({
          message: "请选择要发送优惠券的用户",
          type: "warning",
          duration: 2000,
        });
      } else {
        console.log("选择了用户");
      }
    };

    // 点击批量设置分组
    const setGroup = () => {
      if (selectionList.value.length === 0) {
        Message({
          message: "请选择要设置分组的用户",
          type: "warning",
          duration: 2000,
        });
      } else {
        console.log("选择了用户");
      }
    };

    // 点击批量设置标签
    const setLabel = () => {
      if (selectionList.value.length === 0) {
        Message({
          message: "请选择要设置标签的用户",
          type: "warning",
          duration: 2000,
        });
      } else {
        console.log("选择了用户");
      }
    };

    // 搜索
    const userSearchs = () => {
      userFrom.page = 1;
      getList();
    };

    // 获取编辑表单数据
    const edit = (row: any) => {
      editUserModal.editDialog = true;
      // editUserModal.changeData的值
      Object.assign(editUserModal.changeData, row);
      console.log(editUserModal.editDialog);
    };

    // 修改表单数据
    const changeUserData = () => {
      editUserModal.editDialog = false;
      editUserData(editUserModal.changeData).then((res: any) => {
        console.log(res);
        userLists.value = res.list;
      });
    };

    // 添加用户
    const save = () => {
      getUserSaveForm().then(({ data }) => {
        console.log("data", data);
        // 创建添加用户的表单
        if (data.status == 200) {
          addModalData.addDialog = true;
          addModalData.addUserForm = data.data.rules;
        } else {
          Message({
            message: data.data.info,
            type: "warning",
            duration: 3000,
          });
        }
      });
    };
    const addUser = () => {
      getList();
    };

    // 下拉菜单操作
    const handleCommand = (row: any, command: string) => {
      switch (command) {
        case "1":
          userDetails.value.modals = true;
          userDetails.value.getDetails(row.uid);
          break;
        case "2":
          console.log("点击了积分余额");
          break;
        case "5":
          console.log("点击了设置分组");
          break;
        case "6":
          console.log("点击了设置标签");
          break;
      }
    };

    //将时间戳转换成正常时间格式
    const timestampToTime = (timestamp: number) => {
      var date = new Date(timestamp * 1000); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
      var Y = date.getFullYear() + "-";
      var M =
        (date.getMonth() + 1 < 10
          ? "0" + (date.getMonth() + 1)
          : date.getMonth() + 1) + "-";
      var D = date.getDate() + " ";
      var h = date.getHours() + ":";
      var m = date.getMinutes() + ":";
      var s = date.getSeconds();
      return Y + M + D + h + m + s;
    };

    return {
      radio,
      headeNum,
      userFrom,
      onClickTab,
      groupList,
      labelLists,
      collapse,
      selectionList,
      field_key,
      group_id,
      label_id,
      user_time_type,
      userLists,
      handleSizeChange,
      handleCurrentChange,
      onSelectTab,
      addressData,
      address,
      reset,
      onSend,
      setGroup,
      setLabel,
      timestampToTime,
      userSearchs,
      save,
      edit,
      changeUserData,
      addUser,
      handleCommand,
      userDetails,
      ...toRefs(editUserModal),
      ...toRefs(addModalData),
    };
  },
});
</script>

<style lang="stylus" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
  font-size: 12px;
}

.el-dropdown-menu__item {
  font-size: 12px;
}

.demo-table-expand {
    font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: red;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 30%;
  color: #606266;
}

.img {
  width: 36px;
  height: 36px;
}
</style>
