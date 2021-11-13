<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-md-4 mt-5">
          <h5>Dafidea</h5>
          <p class="mt-3">
            Fokus Tingkatkan Bisnis Anda, Kami hadir untuk memberikan solusi
            digital sehingga dapat terus membantu bisnis Anda berkembang.
          </p>
          <p>Copyright 2020 CV. Dafidea Technocraft</p>
        </div>
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-4 mt-5 ml-5">
              <h5>Company</h5>
              <ul class="mt-4">
                <li><a href="#">About</a></li>
                <li><a href="#">Our Work</a></li>
              </ul>
            </div>
            <div class="col-md-4 mt-5">
              <h5>Services</h5>
              <ul class="mt-4">
                <li><a href="#">Custom Applications</a></li>
                <li><a href="#">Websites Applications</a></li>
                <li><a href="#">Mobile Applications</a></li>
              </ul>
            </div>
            <div class="col-md-4 mt-5">
              <h5>Contact Info</h5>
              <ul class="mt-4">
                <li><a href="#">Email: info@dafidea.com</a></li>
                <li><a href="#">Whatsapp: +62-877-5774-7804</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  setup() {},
};
</script>

<style scoped>
footer {
  background: linear-gradient(183.41deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  margin-top: 200px !important;
  font-family: "Mulish", sans-serif;
  color: #fff;
}

footer h5 {
  font-weight: 700;
  font-size: 24px !important;
}

footer p {
  font-weight: 300;
  font-size: 16px !important;
}

footer a,
footer li {
  text-decoration: none !important;
  list-style: none !important;
  color: #fff;
  font-family: "Mulish", sans-serif;
  font-size: 16px !important;
  font-weight: 300;
}

footer ul {
  padding: 0px !important;
}
</style>
