<script>
import {
  required,
  email,
} from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      googleImg: require("@/assets/google.svg"),
      formData: {
        email: "test@test.com",
        password: "testing",
        remember: false,
      },
    };
  },
  validations: {
    formData: {
      email: { required, email },
      password: {
        required
      },
    },
  },
  methods: {
    login() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.$router.push("/dashboard");
      }
    },
  },
};
</script>

<template>
  <div class="auth">
    <span class="site-header">ECOMVISION</span>
    <div class="row">
      <div class="col-md-6 p-5 auth-left">
        <div class="card">
          <span class="auth-header"> Welcome Back </span>
          <span class="text-center text-secondary mb-4">
            We are happy you're back, enter your credentials to login and enjoy
            our service.
          </span>
          <div>
            <form @submit.prevent="login" class="d-flex flex-column gap-3">
              <div
                class="form-box"
                :class="{ 'is-invalid': $v.formData.email.$error }"
              >
                <span>
                  <i class="fa fa-envelope"></i>
                </span>
                <input
                  class="form-input"
                  type="email"
                  placeholder="Email"
                  @onkeyup="login"
                  v-model="formData.email"
                  required
                />
              </div>
              <div class="invalid-feedback">
                <span
                  v-if="
                    (!$v.formData.email.required || !$v.formData.email.email) &&
                    $v.formData.email.$dirty
                  "
                >
                  Valid email required!
                </span>
              </div>
              <div
                class="form-box"
                :class="{ 'is-invalid': $v.formData.password.$error }"
              >
                <span>
                  <i class="fa fa-solid fa-lock"></i>
                </span>
                <input
                  class="form-input"
                  type="password"
                  placeholder="Password"
                  @onkeyup="login"
                  v-model="formData.password"
                  required
                />
              </div>
              <div class="invalid-feedback">
                <span
                  v-if="
                    !$v.formData.password.required &&
                    $v.formData.password.$dirty
                  "
                >
                  Password required!
                </span>
              </div>

              <div class="d-flex justify-content-between">
                <span class="d-flex align-items-center gap-2">
                  <input type="checkbox" v-model="formData.remember" />
                  <span>Remember me.</span>
                </span>
                <router-link
                  to="/auth/forgot-password"
                  class="text-decoration-none text-pink"
                >
                  Forgot password.
                </router-link>
              </div>
              <button type="submit" class="login-button">Login</button>

              <button
                type="submit"
                class="login-button bg-light text-dark border d-flex align-items-center justify-content-center gap-2"
              >
                <img width="20" height="20" :src="googleImg" />
                Sign in with google
              </button>

              <span class="text-center">
                Don't have an account ?
                <router-link
                  to="/auth/register"
                  class="text-decoration-none text-pink"
                >
                  Register.
                </router-link>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 bg-light auth-right">
        <span class="pink-ball">
          <span class="glass"></span>
        </span>
      </div>
    </div>
  </div>
</template>
