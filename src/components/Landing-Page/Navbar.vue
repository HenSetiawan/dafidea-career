<template>
  <nav class="navbar navbar-expand-lg navbar-light shadow-sm fixed-top">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img
          src="https://dafidea.com/wp-content/uploads/2020/07/logo-dafidea-buat-43x90-1.png"
          alt="dafidea"
          srcset=""
        />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Job</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Freelance</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Internship</a>
          </li>
          <li class="nav-item contact-us">
            <a
              class="nav-link btn-sm btn-primary text-light rounded-pill"
              href="https://api.whatsapp.com/send?phone=+62838848939627"
              >Contact Us</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  setup() {},
};
</script>
<style>
.navbar-brand img {
  width: 100px;
  height: 30px;
}

.navbar {
  z-index: 999;
  background-color: white;
}

@media only screen and (max-width: 600px) {
  .contact-us {
    display: none;
  }
}
</style>
