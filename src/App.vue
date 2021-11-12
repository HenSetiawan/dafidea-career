<template>
  <Navbar />
  <router-view />
</template>
<script>
import Navbar from "../src/components/Navbar.vue";
export default {
  components: { Navbar },
  setup() {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;800&display=swap");

* {
  font-family: "Poppins", sans-serif;
}

</style>
