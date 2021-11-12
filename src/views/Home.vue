<template>
  <Banner />
  <Career />
  <Testimony />
  <Faq />
  <Footer />
</template>

<script>
// @ is an alias to /src
import Banner from "../components/Banner.vue";
import Career from "../components/Career.vue";
import Footer from "../components/Footer.vue";
import Faq from "../components/Faq.vue";
import Testimony from "../components/Testimony.vue";

export default {
  components: {
    Banner,
    Career,
    Testimony,
    Footer,
    Faq,
  },
  name: "Home",
};
</script>
