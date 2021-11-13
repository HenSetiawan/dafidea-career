<template>
  <section class="container">
    <h2 class="text-center">Benefit</h2>
    <div class="faq mt-1" v-for="(faq, index) in faqList" :key="index">
      <a
        class="btn bt-sm btn-faq"
        data-bs-toggle="collapse"
        :href="'#' + faq.question[1] + index"
        role="button"
        aria-expanded="false"
      >
        {{ faq.question }}
      </a>
      <div class="collapse mt-2" :id="faq.question[1] + index">
        <div class="card card-body text-secondary">{{ faq.answer }}</div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  name: "faq",
  setup() {
    const faqList = ref([
      { question: "Apakah Ada BPJS", answer: "Ada, dafidea menyediakan BPJS" },
      {
        question: "Apakah Tersedia Untuk Remote",
        answer: "Ada, kamu bisa bekerja dari mana saja",
      },
    ]);

    return { faqList };
  },
};
</script>

<style scoped>
.btn-faq {
  width: 100%;
  border: 1px solid #458ff6;
  color: #458ff6;
}

.btn-faq:hover {
  background-color: #458ff6;
  color: #fff;
}
</style>
