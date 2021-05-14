<template>
  <div>
    <OrderStatus></OrderStatus>
    <OrderSearch></OrderSearch>
    <OrderTable></OrderTable>
  </div>
</template>

<script lang="ts">
import OrderSearch from "./components/OrderSearch.vue";
import OrderStatus from "./components/OrderStatus.vue";
import OrderTable from "./components/OrderTable.vue";
export default {
  components: {
    OrderTable,
    OrderStatus,
    OrderSearch,
  },
  setup() {
    return {};
  },
};
</script>

<style scoped></style>
