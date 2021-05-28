<template>
  <div>
    <el-dialog v-model:visible="innerAddDialog" title="添加用户">
      <div v-for="(item, index) in addUserForm" :key="index">
        <el-form :model="item" :rules="rules" label-width="100px">
          <el-form-item :label="item.title" :prop="item.field">
            <el-input
              v-if="item.type === 'input'"
              v-model="item.value"
              :placeholder="item.props.placeholder"
              size="small"
              :type="item.props.type"
            ></el-input>
            <el-select
              v-if="item.type === 'select'"
              v-model="item.value"
              size="small"
              v-bind="{ multiple: item.props.multiple }"
              value-key="value"
            >
              <el-option
                v-for="subItem in item.options"
                :key="subItem.value"
                :label="subItem.label"
                :value="subItem"
                >{{ subItem.label }}</el-option
              >
            </el-select>
            <el-radio-group
              v-if="item.type === 'radio'"
              v-model="item.value"
              size="small"
            >
              <el-radio
                v-for="(subItem, index) in item.options"
                :key="index"
                :label="subItem.value"
              >
                <span>{{ subItem.label }}</span>
              </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-form>
      </div>
      <div class="dialog-footer">
        <el-button
          type="primary"
          size="small"
          style="width: 100%"
          @click="addUserData()"
          >提 交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { reactive, computed } from "vue";
import { userList } from "@/api/user";
import { Message } from "element3";
export default {
  props: ["addDialog", "addUserForm"],
  emits: ["update:addDialog"],
  setup(props, { emit }) {
    let formData = reactive({});
    let rules = reactive({});
    const innerAddDialog = computed({
      get() {
        return props.addDialog;
      },
      set(v) {
        emit("update:addDialog", v);
      },
    });

    // 获取创建表单的数据
    props.addUserForm.forEach((item) => {
      rules[item.field] = item.validate;
    });

    // 提交添加的用户信息
    const addUserData = () => {
      // 获取填写的表单数据的信息
      props.addUserForm.forEach((item) => {
        formData[item.field] = item.value;
      });

      userList(formData).then((res) => {
        let data = res.data;
        // 添加成功
        if (data.status == 200) {
          emit("add-user");
          emit("update:addDialog", false);
          Message({
            message: data.msg,
            type: "success",
            duration: 2000,
          });
        }
        // userLists.value = data.list;
      });
    };

    return {
      addUserData,
      formData,
      rules,
      innerAddDialog,
    };
  },
};
</script>

<style scoped></style>
