<template>
  <el-container>
    <el-aside width="200px">
      <el-row class="tac">
        <el-col>
          <el-menu
            default-active="3-1"
            class="el-menu-vertical-demo"
            background-color="#001529"
            text-color="#fff"
            active-text-color="#2d8cf0"
            router
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1" :route="{ path: '/admin/home' }">
              <i class="el-icon-menu"></i>
              <template #title>
                <span>主页</span>
              </template>
            </el-menu-item>
            <el-submenu index="2">
              <template #title>
                <i class="el-icon-location"></i>
                <span>商品</span>
              </template>
              <el-menu-item-group>
                <template v-for="product in productRouter" :key="product.path">
                  <el-menu-item :index="product.path">
                    <p>{{ product.meta.title }}</p>
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template #title>
                <i class="el-icon-location"></i>
                <span>订单</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/order/list">订单管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template #title>
                <i class="el-icon-location"></i>
                <span>用户</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="/admin/user/list">用户管理</el-menu-item>
                <el-menu-item index="/admin/user/group">用户分组</el-menu-item>
                <el-menu-item index="/admin/user/label">用户标签</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </el-aside>
    <el-container>
      <el-header>Header</el-header>
      <router-view></router-view>
      <!-- <OrderList></OrderList> -->
    </el-container>
  </el-container>
</template>

<script>
// import OrderList from "../../view/order";
import product from "@/router/modules/product";
import { ref, computed } from "vue";
export default {
  components: {
    // OrderList,
  },
  setup() {
    let defaultOpeneds = ref(["1", "1-4"]);

    function handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
    function handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
    // 商品管理路由信息
    const products = ref(product[0].children);
    const productRouter = computed(() => {
      return products.value.filter((item) => {
        return item.name !== "product";
      });
    });

    console.log(productRouter);
    return {
      defaultOpeneds,
      handleOpen,
      handleClose,
      productRouter,
    };
  },
};
</script>

<style>
.el-container {
  height: 100vh;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  height: 100%;
  background-color: #001529;
  color: #333;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
