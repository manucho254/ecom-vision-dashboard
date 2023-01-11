<script>
import { required, email } from "vuelidate/lib/validators";

export default {
  data: () => {
    return {
      formData: {
        email: "",
      },
      sent: false,
    };
  },
  validations: {
    formData: {
      email: { required, email },
    },
  },
  methods: {
    forgotPassword() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        this.sent = true;
      }
    },
    pushTo() {
      this.$router.push("/auth/login");
      // this.sent = !this.sent;
    },
  },
};
</script>

<template>
  <div
    class="auth bg-light d-flex justify-content-center align-items-center p-3"
  >
    <div class="card p-3" v-if="!sent">
      <div>
        <form @submit.prevent="forgotPassword" class="d-flex flex-column gap-3">
          <p class="text-center">
            Enter an email address associated with your account and we will send
            you a link to reset your password.
          </p>
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
              v-model="formData.email"
              @onkeyup="forgotPassword"
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
          <button type="submit" class="login-button">Continue</button>
        </form>
      </div>
    </div>
    <div v-if="sent" class="d-flex align-items-center flex-column gap-2">
      <i class="fa h2 text-success fa-circle-check"></i>
      <span>
        An reset link has been sent with your email, click the link in your
        email to change your password.
      </span>
      <a class="text-decoration-none cursor-pointer" @click="pushTo"> Back </a>
    </div>
  </div>
</template>
