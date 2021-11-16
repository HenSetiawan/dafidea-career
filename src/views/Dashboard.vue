<template>
  <Sidebar class="sidebar" />
  <router-view class="dashboard-section" />
</template>

<script>
import Sidebar from "../components/dashboard/Sidebar.vue";
export default {
  components: { Sidebar },
  setup() {},
};
</script>

<style scoped>
.dashboard-section {
  display: block;
  position: relative;
  min-height: 100vh;
  top: 0;
  left: 210px;
  width: calc(100% - 210px);
}
.dashboard-section .text {
  display: inline-block;
  color: #11101d;
  font-size: 25px;
  font-weight: 500;
  margin: 18px;
}

@media (max-width: 420px) {
  .dashboard-section {
    left: 85px;
    width: calc(100% - 85px);
  }
}
</style>
