<template>
  <div>
    router-view
    <Foo></Foo>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Foo from "@/components/Foo.vue";
export default defineComponent({
  name: "App",
  components: {
    Foo,
  },
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
</style>
