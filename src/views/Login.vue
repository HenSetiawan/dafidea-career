<template>
  <Navbar />
  <LoginForm />
</template>

<script>
import Navbar from "../components/Landing-Page/Navbar.vue";
import LoginForm from "../components/dashboard/LoginForm.vue";
export default {
  components: { Navbar, LoginForm },
  setup() {},
};
</script>
