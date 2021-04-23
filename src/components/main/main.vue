<template>
  <div>
    <div class="main">
      <div class="content-wrapper">
        <router-view style="min-height: 600px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import "./css/main.css";
export default defineComponent({
  setup() {
    return {};
  },
});
</script>

<style scoped>
.main {
  background: #f5f7f9;
}
</style>
