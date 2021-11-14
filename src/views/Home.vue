<template>
  <Navbar />
  <Banner />
  <Career />
  <Testimony />
  <Faq />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Navbar from "../components/Landing-Page/Navbar.vue";
import Banner from "../components/Landing-Page/Banner.vue";
import Career from "../components/Landing-Page/Career.vue";
import Footer from "../components/Landing-Page/Footer.vue";
import Faq from "../components/Landing-Page/Faq.vue";
import Testimony from "../components/Landing-Page/Testimony.vue";

export default {
  components: {
    Navbar,
    Banner,
    Career,
    Testimony,
    Footer,
    Faq,
  },
  name: "Home",
};
</script>
