<template>
  <section class="career-list">
    <div class="container career-component">
      <div class="row">
        <section class="col-lg-12 text-center">
          <h2>Join Us</h2>
          <p class="w-75 mx-auto mt-4 text-secondary">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas
            maiores molestiae voluptatem reiciendis obcaecati. Voluptatem
            quisquam ullam officia? Placeat, deleniti?
          </p>
        </section>
      </div>

      <div class="row mt-5 services-list mb-5">
        <div
          v-for="job in listJob"
          :key="job.title"
          class="col-sm-6 col-xs-6 col-lg-4"
        >
          <router-link to="/">
            <div class="card card-career text-secondary">
              <div class="card-career-img">
                <img :src="job.image" alt="fulltime" class="img-fluid" />
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ job.title }}</h5>
                <p class="card-text">
                  {{ job.description }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="row mt-2 mb-5">
        <div class="col-lg-12 col-md-12 text-center">
          <a href="#" class="btn btn-outline-primary btn-learn-more"
            >Learn more</a
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const listJob = ref([
      {
        title: "Fulltime",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "/images/work.svg",
      },
      {
        title: "Intern",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "/images/intern.svg",
      },
      {
        title: "Freelance",
        description:
          "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
        image: "/images/freelancer.svg",
      },
    ]);

    return { listJob };
  },
};
</script>

<style scoped>
.card-career {
  margin-top: 20px;
  background: white;
  padding-left: 30px;
  padding-top: 30px;
  box-sizing: border-box;
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.8);
  border-radius: 20px !important;
}

a {
  text-decoration: none !important;
}

.card-career img {
  margin-left: 15px;
  height: 75px;
  width: 60px;
}

.btn-learn-more {
  width: 200px;
  border-radius: 80px !important;
}
</style>
