<template>
  <div>
    <el-dialog v-model:visible="innerAddDialog" title="添加用户">
      <div v-for="(item, index) in addUserForm" :key="index">
        <el-form ref="form" :model="item" :rules="rules" label-width="auto">
          <el-form-item :label="item.title">
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
            >
              <el-option
                v-for="(subItem, index) in item.options"
                :key="index"
                :label="subItem.label"
                :value="subItem.value"
              ></el-option>
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
          @click="addUserData('formData')"
          >提 交</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { ref, reactive, toRefs, onMounted, computed } from "vue";
import { userList } from "@/api/user";
export default {
  props: ["addDialog", "addUserForm"],
  emits: ["update:addDialog"],
  setup(props, { emit }) {
    const form = ref(null);
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

    onMounted(() => {
      // 验证规则
      props.addUserForm.forEach((item) => {
        rules[item.field] = item.validate;
      });
      console.log(rules);
    });

    // 提交添加的用户信息
    const addUserData = () => {
      props.addUserForm.forEach((item) => {
        formData[item.field] = item.value;
      });
      console.log(formData);

      form.value.validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });

      userList(formData).then((res) => {
        let data = res.data;
        // console.log(data);
        // userLists.value = data.list;
      });
    };

    return {
      form,
      addUserData,
      formData,
      rules,
      innerAddDialog,
    };
  },
};
</script>

<style scoped></style>
