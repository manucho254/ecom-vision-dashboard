<script>
import {
  required,
  minLength,
  maxLength,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  data: () => {
    return {
      formData: {
        password: "",
        confirmPassword: "",
      },
    };
  },
  validations: {
    formData: {
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
    changePassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        console.log(this.formData);
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
          <div>
            <form
              @submit.prevent="changePassword"
              class="d-flex flex-column gap-3"
            >
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
                  @onkeyup="changePassword"
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
                  @onkeyup="changePassword"
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

              <button type="submit" class="login-button">
                Change Password
              </button>
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
