<template>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="商品分类">
      <el-select v-model="value" placeholder="请选择" @change="selectType">
        <el-option
          v-for="item in categoryTree"
          :key="item.cate_name"
          :label="`${item.html}${item.cate_name}`"
          :value="item.cate_name"
        >
        </el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="商品搜索">
      <el-input placeholder="请输入商品名称,关键字,ID"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="el-icon-search"></el-button>
    </el-form-item>
  </el-form>
  <div class="buttons">
    <el-button type="primary" icon="el-icon-plus">添加商品</el-button>
    <el-button type="success">商品采集</el-button>
    <el-button plain @click="onDismount">批量下架</el-button>
    <el-button plain icon="el-icon-upload2">导出</el-button>
  </div>
  <el-table
    :data="tableData"
    style="width: 100%"
    height="250"
    class="table"
    @selection-change="onSelectTab"
  >
    <el-table-column type="selection" width="55"> </el-table-column>
    <el-table-column prop="id" label="商品ID" width="150"> </el-table-column>
    <el-table-column prop="image" label="商品图" width="80">
      <template #default="scope">
        <img
          :src="scope.row.image"
          alt=""
          style="width: 36px; object-fit: contain"
        />
      </template>
    </el-table-column>
    <el-table-column prop="cate_name" label="商品名称" min-width="300">
    </el-table-column>
    <el-table-column prop="price" label="商品售价" width="120">
    </el-table-column>
    <el-table-column prop="sales" label="销量" sortable width="120">
    </el-table-column>
    <el-table-column prop="stock" label="库存" width="120"> </el-table-column>
    <el-table-column prop="sort" label="排序" width="120"> </el-table-column>
    <el-table-column label="状态" width="200">
      <template #default="scope">
        <el-switch
          v-model="scope.row.is_show"
          active-text="上架"
          inactive-text="下架"
          @change="$emit('changeShow', scope.row.id, +scope.row.is_show)"
        >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="300">
      <template #default="scope">
        <el-button type="text" size="small" @click="handleClick(scope.row)"
          >编辑</el-button
        >
        <el-button type="text" size="small">查看评论</el-button>
        <el-button type="text" size="small">移到回收站</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import { onMounted, ref, defineEmit } from "vue";
import { getCategoryTree } from "@/api/product";
export default {
  props: {
    type: {
      type: Number,
      default: 1,
    },
    tableData: {
      type: Array,
      default: () => [],
    },
  },
  setup(props, context) {
    const value = ref("");
    const search = ref("");
    const categoryTree = ref([]);
    const ids = ref([]); //选中的数据id
    const onDismount = function () {
      if (ids.value.length === 0) {
        // Message.error('请选择要下架的商品')
      } else {
        context.emit("onDismount", ids.value);
      }
    };
    //全选
    const onSelectTab = function (selection) {
      let arr = [];
      selection.map((item) => {
        arr.push(item.id);
      });
      ids.value = arr;
    };

    //全选api请求

    const handleEdit = function (index, row) {
      console.log(index, row);
    };
    const handleDelete = function (index, row) {
      console.log(index, row);
    };
    const handleClick = function (row) {
      console.log(row);
    };
    onMounted(() => {
      getCategoryTree().then((res) => {
        if (res.status === 200) {
          categoryTree.value = res.data.data;
        }
      });
    });

    return {
      props,
      value,
      search,
      categoryTree,
      handleEdit,
      handleDelete,
      handleClick,
      ids,
      onDismount,
      onSelectTab,
    };
  },
};
</script>
<style scoped>
.demo-form-inline {
  display: flex;
}
.buttons {
  display: flex;
}
.table .article-manager {
  padding: 0 20px;
}
</style>
