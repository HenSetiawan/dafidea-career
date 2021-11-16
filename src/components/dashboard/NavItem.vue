<template>
  <ul class="nav-list">
    <li>
      <router-link to="/dashboard">
        <i class="bx bx-grid-alt"></i>
        <span class="links_name">Dashboard</span>
      </router-link>
    </li>
    <li>
      <router-link to="/dashboard/table">
        <i class="bx bx-table"></i>
        <span class="links_name">Table</span>
      </router-link>
    </li>
    <li>
      <router-link to="/dashboard/form">
        <i class="bx bxs-data"></i>
        <span class="links_name">Form</span>
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
i {
  color: #fff;
  height: 60px;
  min-width: 50px;
  font-size: 28px;
  text-align: center;
  line-height: 60px;
}
.nav-list {
  margin-top: 20px;
  height: 100%;
}

.nav-list a:hover {
  background-color: #fff;
}

.nav-list a:hover .links_name,
.nav-list a:hover i {
  color: #11101d;
}

li {
  position: relative;
  margin: 8px 0;
  list-style: none;
}

li a {
  display: flex;
  height: 100%;
  width: 100%;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
  background: #11101d;
}

li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 1;
  pointer-events: none;
}

li i {
  height: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
}

@media (max-width: 420px) {
  .links_name {
    display: none !important;
  }
}
</style>
