<script>
import {
  required,
  minLength,
  maxLength,
  email,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      googleImg: require("@/assets/google.svg"),
      formData: {
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    formData: {
      email: { required, email },
      password: {
        required,
        maxLength: maxLength(20),
        minLength: minLength(8),
      },
      confirmPassword: {
        required,
        maxLength: maxLength(20),
        minLength: minLength(8),
        sameAsPassword: sameAs("password"),
      },
    },
  },
  methods: {
    register() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log("valid");
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
            <form @submit.prevent="register" class="d-flex flex-column gap-3">
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
                  @onkeyup="register"
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
                  @onkeyup="register"
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
                <span
                  v-if="
                    !$v.formData.password.minLength &&
                    $v.formData.password.$dirty
                  "
                >
                  Password must have more than 8 characters!
                </span>
                <span
                  v-if="
                    !$v.formData.password.maxLength &&
                    $v.formData.password.$dirty
                  "
                >
                  Password should have less than 20 characters!
                </span>
              </div>

              <div
                class="form-box"
                :class="{ 'is-invalid': $v.formData.confirmPassword.$error }"
              >
                <span>
                  <i class="fa fa-solid fa-lock"></i>
                </span>
                <input
                  class="form-input"
                  type="password"
                  placeholder="Confirm Password"
                  @onkeyup="register"
                  v-model="formData.confirmPassword"
                  required
                />
              </div>
              <div class="invalid-feedback d-flex flex-column gap-1">
                <span
                  v-if="
                    !$v.formData.confirmPassword.required &&
                    $v.formData.confirmPassword.$dirty
                  "
                >
                  Password required!
                </span>
                <span
                  v-if="
                    !$v.formData.confirmPassword.minLength &&
                    $v.formData.confirmPassword.$dirty
                  "
                >
                  Password must have more than 8 characters!
                </span>
                <span
                  v-if="
                    !$v.formData.confirmPassword.maxLength &&
                    $v.formData.confirmPassword.$dirty
                  "
                >
                  Password should have less than 20 characters!
                </span>
                <span
                  v-if="
                    !$v.formData.confirmPassword.sameAsPassword &&
                    $v.formData.confirmPassword.$dirty
                  "
                >
                  Passwords don't match!
                </span>
              </div>

              <button type="submit" class="login-button">Register</button>

              <button
                type="submit"
                class="login-button bg-light text-dark border d-flex align-items-center justify-content-center gap-2"
              >
                <img width="20" height="20" :src="googleImg" />
                Sign up with google
              </button>

              <span class="text-center">
                Got an account ?
                <router-link
                  to="/auth/login"
                  class="text-decoration-none text-pink"
                >
                  Login.
                </router-link>
              </span>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6 bg-light auth-right">
        <span class="pink-ball"></span>
        <span class="bg-colorless"></span>
      </div>
    </div>
  </div>
</template>
