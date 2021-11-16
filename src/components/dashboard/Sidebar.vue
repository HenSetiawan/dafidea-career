<template>
  <div class="sidebar">
    <router-link to="/dashboard">
      <div class="logo-details">
        <i class="bx bx-home"></i>
        <div class="logo_name">Dafidea</div>
      </div>
    </router-link>
    <NavItem />
  </div>
</template>

<script>
import NavItem from "./NavItem.vue";
export default {
  components: { NavItem },
  setup() {},
};
</script>

<style scoped>
@import url("https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  background: #11101d;
  padding: 6px 14px;
  z-index: 99;
  width: 200px;
}

.sidebar a {
  text-decoration: none;
}

.sidebar .logo-details {
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
}

.logo-details i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}

.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  opacity: 1;
}

@media (max-width: 420px) {
  .sidebar li .tooltip,
  .links_name,
  .logo_name {
    display: none !important;
  }
  .sidebar {
    width: 80px;
  }

  .home-section {
    left: 80px;
    width: calc(100% - 80px);
  }
}
</style>
