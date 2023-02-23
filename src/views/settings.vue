<script>
import countries from "@/dummyData/countries";
import { mapGetters, mapMutations } from "vuex";

export default {
  data() {
    return {
      image: {},
      countries: countries,
      formData: {
        email: "",
        username: "",
        firstName: "",
        lastName: "",
        language: "",
        country: "",
      },
    };
  },
  mounted() {
    this.$store.dispatch("auth/fetchUser");
    this.formData = this.getUser;
  },
  computed: {
    ...mapGetters({ getUser: "auth/getUser" }),
  },
  methods: {
    ...mapMutations({ setUser: "auth/setUser" }),
    getFile(e) {
      const { files } = e.target;
      if (files && files[0]) {
        if (this.image.src) {
          URL.revokeObjectURL(this.image.src);
        }
        const blob = URL.createObjectURL(files[0]);
        const reader = new FileReader();

        reader.onload = () => {
          this.image = {
            src: blob,
            type: files[0].type,
          };
        };
        reader.readAsArrayBuffer(files[0]);
      }
    },
    updateProfile() {
      let data = { ...this.formData };
      this.setUser(data);
      this.$toast.success("Profile updated successfully.", {
        position: "top-right",
      });
    },
    getLanguage() {
      console.log(this.formData.language);
    },
    getCountry() {
      console.log(this.formData.country);
    },
  },
};
</script>
<template>
  <div>
    <div class="d-flex justify-content-center gap-3 mb-5">
      <div class="d-flex flex-column gap-3">
        <div class="image-container">
          <img :src="image.src" alt="" />
        </div>

        <div class="d-flex justify-content-start">
          <input
            type="file"
            @change="getFile"
            class="image-upload"
            accept="image/jpeg, image/png"
          />
        </div>
      </div>
    </div>
    <div class="row g-2">
      <div class="col-md-4 d-flex flex-column">
        <label>Email</label>
        <input type="text" v-model="formData.email" class="form-class" />
      </div>
      <div class="col-md-4 d-flex flex-column">
        <label>Username</label>
        <input type="text" v-model="formData.username" class="form-class" />
      </div>
      <div class="col-md-4 d-flex flex-column">
        <label>First Name</label>
        <input type="text" v-model="formData.firstName" class="form-class" />
      </div>
      <div class="col-md-4 d-flex flex-column">
        <label>Last Name</label>
        <input type="text" v-model="formData.lastName" class="form-class" />
      </div>
      <div class="col-md-4 d-flex flex-column">
        <label>Country</label>
        <select
          @change="getCountry"
          class="form-class"
          v-model="formData.country"
        >
          <option
            v-for="(country, index) in countries"
            :key="index"
            :value="country.name"
          >
            {{ country.name }}
          </option>
        </select>
      </div>
      <div class="col-md-4 d-flex flex-column">
        <label>Language</label>
        <select
          @change="getLanguage"
          class="form-class"
          v-model="formData.language"
        >
          <option value="English">English</option>
          <option value="Swahili">Swahili</option>
          <option value="Spanish">Spanish</option>
          <option value="French">French</option>
        </select>
      </div>
      <div class="d-flex align-items-center justify-content-center mt-4">
        <button class="btn btn-light" @click="updateProfile">
          Update Profile
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  background-color: azure;
  width: 200px;
  height: 200px;
  border-radius: 50%;
}
.image-container img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.image-container img:hover {
  cursor: pointer;
  transform: scale(0.9, 0.9);
}

input {
  height: 35px;
  padding: 10px;
  border: black 1px solid;
  border-radius: 5px;
}

select {
  height: 35px;
  padding: 0 10px 0 10px;
  border: black 1px solid;
  border-radius: 5px;
}

.image-upload {
  background: none;
  height: 35px;
  padding: 0;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button {
  background-color: rgb(28, 27, 27);
  color: #fff;
  cursor: pointer;
}
</style>
