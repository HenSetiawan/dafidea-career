<template>
  <ul class="nav-list">
    <li>
      <a href="#">
        <i class="bx bx-grid-alt"></i>
        <span class="links_name">Dashboard</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="bx bx-user"></i>
        <span class="links_name">User</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="bx bx-chat"></i>
        <span class="links_name">Messages</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="bx bx-pie-chart-alt-2"></i>
        <span class="links_name">Analytics</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="bx bx-folder"></i>
        <span class="links_name">File Manager</span>
      </a>
    </li>
    <li>
      <a href="#">
        <i class="bx bx-cart-alt"></i>
        <span class="links_name">Order</span>
      </a>
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
