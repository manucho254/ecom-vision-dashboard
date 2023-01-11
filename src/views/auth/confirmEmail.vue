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
          Account confirmed you will be redirected shortly.
          <div></div>
          <div class="col-md-6 bg-light auth-right">
            <span class="pink-ball"></span>
            <span class="bg-colorless"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
