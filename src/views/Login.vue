<template>
  <div class="container">
    <section class="form-group p-5">
      <h1>WELCOME BACK</h1>
      <p>Don’t have a account, <a href="#">Sign Up</a></p>
      <form action="/login" method="post" class="mt-5">
        <p class="input-label">Username</p>
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control"
            aria-label="Username"
            placeholder="hendysetiawan"
            required
          />
        </div>
        <p class="input-label">Password</p>
        <div class="input-group mb-3">
          <input
            type="password"
            class="form-control"
            aria-label="Username"
            placeholder="********"
            required
          />
        </div>
        <div class="row">
          <div class="col-lg-6 col-6">
            <div class="input-group checkbox">
              <input type="checkbox" id="checkbox" />
              <div class="round">
                <label for="checkbox"></label>
              </div>
              <p class="remember-me">Remember me</p>
            </div>
          </div>
          <div class="col-lg-6 col-6">
            <a href="" class="forgot-password">forgot password?</a>
          </div>
        </div>
        <div class="input-group mb-3 mt-4">
          <button type="submit" class="form-control btn-login">Sign In</button>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped>
input {
  display: inline-block;
  border-radius: 16px;
  border: 2px solid #789ade;
}
.form-group {
  margin: auto;
  margin-top: 80px;
  width: 50%;
}

.input-label {
  font-size: 16px !important;
  margin-left: 6px !important;
}

p.remember-me,
a.forgot-password {
  font-size: 14px;
  font-family: "Nunito", sans-serif;
}

::placeholder {
  color: #c8d3f9;
  font-size: 12px;
}

main .hero-image {
  display: inline-block;
}

.round {
  margin-right: 4px;
  border: 1px solid #789ade;
  width: 24px;
  height: 24px;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 50% !important;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 16px;
  width: 16px;
}

input[type="checkbox"] {
  visibility: hidden;
}

input[type="checkbox"]:checked + .round label {
  background-color: #8699da;
  border-color: #8699da;
}

input[type="checkbox"]:checked + label:after {
  opacity: 1;
}

.btn-login {
  background-color: #8699da;
  color: white;
  font-family: "Nunito", "sans-serif";
  border-radius: 16px;
}

@media only screen and (max-width: 600px) {
  .form-group {
    width: 100% !important;
    margin: auto;
    margin-top: 35px;
  }
}
</style>
