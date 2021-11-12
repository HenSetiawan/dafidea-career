<template>
  <section class="testimony-container mb-5">
    <div class="container">
      <div class="row">
        <div
          class="col-lg-6 mb-4"
          v-for="testimony in listTestimonial"
          :key="testimony.name"
        >
          <div class="testimony-card">
            <div class="profile">
              <img :src="testimony.profileImage" alt="profile picture" />
              <p class="profile-name">{{ testimony.name }}</p>
              <p class="profile-role">{{ testimony.role }}</p>
            </div>
            <div class="testimony text-secondary">
              <p class="mt-3">
                {{ testimony.testimony }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const listTestimonial = ref([
      {
        name: "Budi Utomo",
        profileImage: "/images/profile.png",
        role: "Backend Developer",
        testimony:
          "Lorem Ipsum Deserunt assumenda maxime quos veritatis, atque debitis.",
      },
      {
        name: "Andi Nugraha",
        profileImage: "/images/profile.png",
        role: "Frontend Developer",
        testimony:
          "Lorem Ipsum Deserunt assumenda maxime quos veritatis, atque debitis.",
      },
    ]);

    return { listTestimonial };
  },
};
</script>

<style scoped>
.testimony-container {
  background-color: #458ff6;
  padding: 25px;
}
.testimony-card {
  background-color: #fff;
  padding: 25px;
  border-radius: 8px;
  display: flex;
}

.profile {
  text-align: center;
  width: 150px;
}

.profile img {
  padding: 10px;
  border: 2px solid #f4f5fe;
}

.profile-name {
  font-weight: 800;
}

.profile-role {
  color: #458ff6;
  font-size: 14px;
}

.testimony {
  width: 300px;
}
</style>
