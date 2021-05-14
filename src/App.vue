<template>
  <div>
    <!-- router-view
    <Foo></Foo> -->
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
});
</script>

<style lang="less">
.size {
  width: 100%;
  height: 100%;
}
html,
body {
  .size;
  margin: 0;
  padding: 0;
}
#app {
  .size;
}
// 设置级联选择器的高度
.el-cascader-menu {
  height: 300px;
}

// contain 样式修改
#app .el-main {
  line-height: 0;
}
.article-manager {
  padding: 0 20px;
}
</style>
